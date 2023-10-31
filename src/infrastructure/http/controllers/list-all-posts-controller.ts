import { Request, Response } from "express";
import { ListAllPostsUseCase } from "@core/usecases/list-all-posts-usecase";
import { PostViewModel } from "../view-models/post-view-model";

export class ListAllPostsController {
  constructor(private readonly listAllPostsUseCase: ListAllPostsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const posts = await this.listAllPostsUseCase.execute();
    return response
      .status(200)
      .json({ posts: posts.map(PostViewModel.toHttp) });
  }
}
