import { CreatePostUseCase } from "@core/usecases/create-post-usecase";
import { DeletePostUseCase } from "@core/usecases/delete-post-usecase";
import { EditPostUseCase } from "@core/usecases/edit-post-usecase";
import { FindPostByIdUsecase } from "@core/usecases/find-post-by-id-usecase";
import { ListAllPostsUseCase } from "@core/usecases/list-all-posts-usecase";
import { FakePostRepository } from "@infrastructure/data/repositories/fakes/fake-post-repository";
import express from "express";
import { CreatePostController } from "../controllers/create-post-controller";
import { DeletePostController } from "../controllers/delete-post-controller";
import { EditPostController } from "../controllers/edit-post-controller";
import { FindPostByIdController } from "../controllers/find-post-by-id-controller";
import { ListAllPostsController } from "../controllers/list-all-posts-controller";

export const fakePostRepository = new FakePostRepository();

const createPostUseCase = new CreatePostUseCase(fakePostRepository);
const createPostController = new CreatePostController(createPostUseCase);

const findPostByIdUsecase = new FindPostByIdUsecase(fakePostRepository);
const findPostByIdController = new FindPostByIdController(findPostByIdUsecase);

const listAllPostsUseCase = new ListAllPostsUseCase(fakePostRepository);
const listAllPostsController = new ListAllPostsController(listAllPostsUseCase);

const editPostUseCase = new EditPostUseCase(fakePostRepository);
const editPostController = new EditPostController(editPostUseCase);

const deletePostUseCase = new DeletePostUseCase(fakePostRepository);
const deletePostController = new DeletePostController(deletePostUseCase);

export const fakeRouter = express.Router();

fakeRouter.post("/fake/posts", async (response, request) => {
  return await createPostController.handle(response, request);
});

fakeRouter.get("/fake/posts", async (response, request) => {
  return await listAllPostsController.handle(response, request);
});

fakeRouter.get("/fake/posts/:id", async (response, request) => {
  return await findPostByIdController.handle(response, request);
});

fakeRouter.put("/fake/posts/:id", async (response, request) => {
  return await editPostController.handle(response, request);
});

fakeRouter.delete("/fake/posts/:id", async (response, request) => {
  return await deletePostController.handle(response, request);
});
