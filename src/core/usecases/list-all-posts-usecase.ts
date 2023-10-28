import { PostRepository } from "../repositories/PostRepository";

export class ListAllPostsUseCase {
  constructor(private repository: PostRepository) {}

  async execute() {
    const posts = await this.repository.findAll()
    return posts;
  }
}