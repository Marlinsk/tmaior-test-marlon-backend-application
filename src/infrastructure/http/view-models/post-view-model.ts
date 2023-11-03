import { Post } from "@core/domain/Post";

export class PostViewModel {
  static toHttp(post: Post) {
    return {
      id: post.getId,
      title: post.getTitle,
      text: post.getText,
      createdAt: post.getCreatedAt,
      updatedAt: post.getUpdatedAt,
    };
  }
}
