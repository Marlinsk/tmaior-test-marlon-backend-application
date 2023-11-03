import { AppError } from "@common/errors/AppError";
import { FakePostRepository } from "@infrastructure/database/repositories/implementations/fakes/fake-post-repository";
import { CreatePostUseCase } from "./create-post-usecase";

let repository: FakePostRepository;
let createPostUseCase: CreatePostUseCase;

describe("CreatePostUseCase", () => {
  beforeEach(() => {
    repository = new FakePostRepository();
    createPostUseCase = new CreatePostUseCase(repository);
  });

  it("should be able to create a new post", async () => {
    const post = await createPostUseCase.execute({
      title: "Post Title",
      text: "Post text",
    });

    expect(post).toHaveProperty("_id");
    expect(repository.posts).toHaveLength(1);
    expect(repository.posts[0]).toEqual(post);
  });

  it("should not be able to create a post in blanc", async () => {
    await expect(
      createPostUseCase.execute({
        title: "",
        text: "",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a post without title", async () => {
    await expect(
      createPostUseCase.execute({
        title: "",
        text: "Post text",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a post without text", async () => {
    await expect(
      createPostUseCase.execute({
        title: "Post title",
        text: "",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
