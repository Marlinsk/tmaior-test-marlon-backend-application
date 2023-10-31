import { Post } from "@core/domain/Post";
import { PostRepository } from "@core/repositories/PostRepository";

export class FakePostRepository implements PostRepository {
  public posts: Post[] = [];

  async create(post: Post): Promise<Post> {
    this.posts.push(post);
    return post;
  }

  async findAll(): Promise<Post[]> {
    return this.posts;
  }

  async findById(id: string): Promise<Post | undefined> {
    const post = this.posts.find((post) => post.id === id);
    return post;
  }

  async save(data: Post): Promise<Post> {
    const findIndex = this.posts.findIndex((post) => post.id === data.id);
    this.posts[findIndex] = data;
    return data;
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.posts.findIndex((post) => post.id === id);
    this.posts.splice(findIndex, 1);
    return;
  }
}
