import { AppError } from "@common/errors/AppError";
import { Post } from "@core/domain/Post";
import { initialFakeDataPost } from "@infrastructure/data/mocks/FakeDataPost";
import {
  fakePostRepository,
  fakeRouter,
} from "@infrastructure/http/routes/route";
import cors from "cors";
import express, { NextFunction, Request, Response, json } from "express";
import "express-async-errors";

initialFakeDataPost.forEach((data) => {
  const post = new Post({
    id: data.id,
    title: data.title,
    text: data.text,
  });
  if (fakePostRepository.findAll.length <= 0) {
    fakePostRepository.create(post);
  }
});

const app = express();
const port = 5000;

app.use(cors());
app.use(json());
app.use(fakeRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server starting 🚀 http://localhost:${port}`);
});
