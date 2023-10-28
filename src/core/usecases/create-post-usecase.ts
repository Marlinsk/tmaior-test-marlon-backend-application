import { Post } from "../domain/Post";
import { PostRepository } from "../repositories/PostRepository";

export class CreatePostUseCase {
  constructor(private repository: PostRepository) {}

  async execute(dto: { id?: string, title: string; text: string; }) {
    const data = new Post({
      id: dto.id,
      title: dto.title,
      text: dto.text
    });
    
    return await this.repository.create(data);
  }
}