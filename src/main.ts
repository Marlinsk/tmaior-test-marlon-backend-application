import express, { json, Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { AppError } from "@common/errors/AppError";
import { Post } from "@core/domain/Post";
import { initialPostData } from "@infrastructure/data/mocks/PostData";
import { fakePostRepository, fakeRouter } from "@infrastructure/http/routes/fake.route";

initialPostData.forEach((data) => {
  const post = new Post({
    id: data.id,
    title: data.title,
    text: data.text
  });

  fakePostRepository.create(post)
});

const app = express();
const port = 5000;

app.use(cors());
app.use(json());
app.use(fakeRouter);

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