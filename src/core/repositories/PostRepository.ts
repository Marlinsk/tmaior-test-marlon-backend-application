import { Post } from "../domain/Post";

export abstract class PostRepository {
  abstract create(data: Post): Promise<Post>;
  abstract findAll(): Promise<Post[]>;
  abstract findById(id: string): Promise<Post | undefined>;
  abstract save(data: Post): Promise<Post>;
  abstract delete(id: string): Promise<void>;
}
