import { ListAllPostsUseCase } from "@core/usecases/list-all-posts-usecase";
import { Request, Response } from "express";

export class ListAllPostsController {
  constructor(private readonly listAllPostsUseCase: ListAllPostsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const posts = await this.listAllPostsUseCase.execute();
    return response
      .status(200)
      .json(posts);
  }
}
