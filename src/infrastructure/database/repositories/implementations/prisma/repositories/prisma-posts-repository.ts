import { Post } from "@core/domain/Post";
import { PostRepository } from "@core/repositories/PostRepository";
import { prisma } from "@providers/prisma.client";
import { PrismaPostsMapper } from "../mappers/prisma-posts-mapper";

export class PrismaPostsRepository implements PostRepository {
  async create(data: Post): Promise<Post> {
    const { title, text, createdAt, updatedAt } =
      PrismaPostsMapper.toPrisma(data);
    const post = await prisma.posts.create({
      data: { title, text, createdAt, updatedAt },
    });
    return PrismaPostsMapper.toDomain(post);
  }

  async findAll(): Promise<Post[]> {
    const posts = await prisma.posts.findMany();
    return posts.map(PrismaPostsMapper.toDomain);
  }

  async findById(id: string): Promise<Post | undefined> {
    const post = await prisma.posts.findUnique({ where: { id } });
    if (!post) {
      return;
    }
    return PrismaPostsMapper.toDomain(post);
  }

  async save(data: Post): Promise<Post> {
    const { id, title, text, createdAt, updatedAt } =
      PrismaPostsMapper.toPrisma(data);
    const post = await prisma.posts.update({
      where: { id },
      data: { title, text, createdAt, updatedAt },
    });

    return PrismaPostsMapper.toDomain(post);
  }

  async delete(id: string): Promise<void> {
    await prisma.posts.delete({ where: { id } });
  }
}
