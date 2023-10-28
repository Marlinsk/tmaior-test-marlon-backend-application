import { AppError } from "../../common/errors/AppError";
import { PostRepository } from "../repositories/PostRepository";

export class EditPostUseCase {
  constructor(private repository: PostRepository) {}

  async execute(dto: { id: string; title: string; text: string; }) {
    const post = await this.repository.findById(dto.id);

    if (!post) {
      throw new AppError("Not found.", 404);
    }

    post.title = dto.title;
    post.text = dto.text;
    post.updatedAt = new Date()

    return await this.repository.save(post);
  }
}