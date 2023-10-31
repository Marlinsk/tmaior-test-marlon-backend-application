import { AppError } from "../../common/errors/AppError";
import { PostRepository } from "../repositories/PostRepository";

export class DeletePostUseCase {
  constructor(private repository: PostRepository) {}

  async execute(id: string) {
    const post = await this.repository.findById(id);

    if (!post) {
      throw new AppError("Not found.", 404);
    }

    await this.repository.delete(id);

    return;
  }
}
