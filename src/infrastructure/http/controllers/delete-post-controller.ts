import { DeletePostUseCase } from "@core/usecases/delete-post-usecase";
import { Request, Response } from "express";

export class DeletePostController {
  constructor(private readonly deletePostUseCase: DeletePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deletePostUseCase.execute(id);
    return response.status(200).json({
      message: "Successfully deleted",
    });
  }
}