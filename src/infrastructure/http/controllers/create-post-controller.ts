import { CreatePostUseCase } from "@core/usecases/create-post-usecase";
import { Request, Response } from "express";

export class CreatePostController {
  constructor(private readonly createPostUseCase: CreatePostUseCase) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, text } = request.body;
    const post = await this.createPostUseCase.execute({ title, text })
    return response.status(201).json(post);
  }
}