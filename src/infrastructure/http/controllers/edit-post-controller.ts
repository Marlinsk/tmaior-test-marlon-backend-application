import { EditPostUseCase } from "@core/usecases/edit-post-usecase";
import { Request, Response } from "express";

export class EditPostController {
  constructor(private readonly editPostUseCase: EditPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, text } = request.body;
    const post = await this.editPostUseCase.execute({ id, title, text })
    return response.status(200).json(post);
  }
}