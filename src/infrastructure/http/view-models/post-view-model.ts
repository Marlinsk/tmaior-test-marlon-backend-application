import { Post } from "@core/domain/Post";

export class PostViewModel {
  static toHttp(post: Post) {
    return {
      id: post.id,
      title: post.title,
      text: post.text,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt
    }
  }
}