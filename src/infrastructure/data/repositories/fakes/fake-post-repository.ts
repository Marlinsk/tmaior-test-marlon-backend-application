import { Post } from "@core/domain/Post";
import { PostRepository } from "@core/repositories/PostRepository";

export class FakePostRepository implements PostRepository {
  private posts: Post[] = [];

  public async create(post: Post): Promise<void> {
    this.posts.push(post)
  }

  public async findAll(): Promise<Post[]> {
    return this.posts;
  }

  public async findById(id: string): Promise<Post | undefined> {
    const post = this.posts.find((post) => post.id === id)
    return post;
  }

  public async save(data: Post): Promise<void> {
    const findIndex = this.posts.findIndex((post) => post.id === data.id)
    this.posts[findIndex] = data;
    return;
  }

  public async delete(id: string): Promise<void> {
    const findIndex = this.posts.findIndex((post) => post.id === id)
    this.posts.splice(findIndex, 1);
    return;
  }
}