import { CreatePostUseCase } from "@core/usecases/create-post-usecase";
import { DeletePostUseCase } from "@core/usecases/delete-post-usecase";
import { EditPostUseCase } from "@core/usecases/edit-post-usecase";
import { FindPostByIdUsecase } from "@core/usecases/find-post-by-id-usecase";
import { ListAllPostsUseCase } from "@core/usecases/list-all-posts-usecase";
import { PrismaPostsRepository } from "@infrastructure/database/repositories/implementations/prisma/repositories/prisma-posts-repository";
import express from "express";
import { CreatePostController } from "../controllers/create-post-controller";
import { DeletePostController } from "../controllers/delete-post-controller";
import { EditPostController } from "../controllers/edit-post-controller";
import { FindPostByIdController } from "../controllers/find-post-by-id-controller";
import { ListAllPostsController } from "../controllers/list-all-posts-controller";

const prismaPostRepository = new PrismaPostsRepository();

const createPostUseCase = new CreatePostUseCase(prismaPostRepository);
const createPostController = new CreatePostController(createPostUseCase);

const findPostByIdUsecase = new FindPostByIdUsecase(prismaPostRepository);
const findPostByIdController = new FindPostByIdController(findPostByIdUsecase);

const listAllPostsUseCase = new ListAllPostsUseCase(prismaPostRepository);
const listAllPostsController = new ListAllPostsController(listAllPostsUseCase);

const editPostUseCase = new EditPostUseCase(prismaPostRepository);
const editPostController = new EditPostController(editPostUseCase);

const deletePostUseCase = new DeletePostUseCase(prismaPostRepository);
const deletePostController = new DeletePostController(deletePostUseCase);

export const router = express.Router();

router.post("/posts", async (response, request) => {
  return await createPostController.handle(response, request);
});

router.get("/posts", async (response, request) => {
  return await listAllPostsController.handle(response, request);
});

router.get("/posts/:id", async (response, request) => {
  return await findPostByIdController.handle(response, request);
});

router.put("/posts/:id", async (response, request) => {
  return await editPostController.handle(response, request);
});

router.delete("/posts/:id", async (response, request) => {
  return await deletePostController.handle(response, request);
});
