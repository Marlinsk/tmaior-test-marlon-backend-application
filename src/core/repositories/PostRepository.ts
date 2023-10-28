import { Post } from "../domain/Post";

export abstract class PostRepository {
  abstract create(data: Post): Promise<void>;
  abstract findAll(): Promise<Post[]>;
  abstract findById(id: string): Promise<Post | undefined>;
  abstract save(data: Post): Promise<void>
  abstract delete(id: string): Promise<void>;
}