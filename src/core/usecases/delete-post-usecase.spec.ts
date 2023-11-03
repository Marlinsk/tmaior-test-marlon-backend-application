import { AppError } from "@common/errors/AppError";
import { FakePostRepository } from "@infrastructure/database/repositories/implementations/fakes/fake-post-repository";
import { CreatePostUseCase } from "./create-post-usecase";
import { DeletePostUseCase } from "./delete-post-usecase";

let repository: FakePostRepository;
let deletePostUseCase: DeletePostUseCase;

describe("DeletePostUseCase", () => {
  beforeAll(() => {
    repository = new FakePostRepository();
    deletePostUseCase = new DeletePostUseCase(repository);
  });

  it("should be able to delete an existing post by id", async () => {
    const createPostUseCase = new CreatePostUseCase(repository);

    const post = await createPostUseCase.execute({
      title: "Post Title",
      text: "Post text",
    });

    const postDeleted = await deletePostUseCase.execute(post.getId);

    expect(postDeleted).toBeUndefined();
    expect(repository.posts).toHaveLength(0);
  });

  it("should not be able to delete an non existing post", async () => {
    await expect(deletePostUseCase.execute("2")).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
