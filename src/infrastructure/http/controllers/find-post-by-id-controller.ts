import { FindPostByIdUsecase } from "@core/usecases/find-post-by-id-usecase";
import { Request, Response } from "express";

export class FindPostByIdController {
  constructor(private readonly findPostByIdUsecase: FindPostByIdUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const post = await this.findPostByIdUsecase.execute(id);
    return response.status(200).json(post);
  }
}
