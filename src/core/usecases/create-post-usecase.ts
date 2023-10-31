import { AppError } from "@common/errors/AppError";
import { Post } from "../domain/Post";
import { PostRepository } from "../repositories/PostRepository";

export class CreatePostUseCase {
  constructor(private repository: PostRepository) {}

  async execute(dto: { id?: string; title: string; text: string }) {
    if (!dto.title && !dto.text) {
      throw new AppError("Post content not be null!", 400);
    }

    if (!dto.title) {
      throw new AppError("Title not be null!", 400);
    }

    if (!dto.text) {
      throw new AppError("Text not be null!", 400);
    }

    const data = new Post({
      id: dto.id,
      title: dto.title,
      text: dto.text,
    });

    const post = await this.repository.create(data);

    return post;
  }
}
