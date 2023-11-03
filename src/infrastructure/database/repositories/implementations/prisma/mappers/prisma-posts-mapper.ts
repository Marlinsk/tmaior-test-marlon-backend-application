import { Post } from "@core/domain/Post";
import { Posts as RawPost } from "@prisma/client";

export class PrismaPostsMapper {
  static toPrisma(post: Post) {
    return {
      id: post.getId,
      title: post.getTitle,
      text: post.getText,
      createdAt: post.getCreatedAt,
      updatedAt: post.getUpdatedAt,
    };
  }

  static toDomain(raw: RawPost): Post {
    return new Post({
      id: raw.id,
      title: raw.title,
      text: raw.text,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }
}
