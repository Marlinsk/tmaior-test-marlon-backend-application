import { AppError } from "@common/errors/AppError";
import { initialDataPost } from "@infrastructure/database/mocks/DataPost";
import { router } from "@infrastructure/http/routes/route";
import { checkMongoDBConnection } from "@providers/check-mongodb-connection";
import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response, json } from "express";
import "express-async-errors";

const app = express();
const port = 5000;

app.use(cors());
app.use(json());
app.use(router);

checkMongoDBConnection();
initialDataPost();

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
