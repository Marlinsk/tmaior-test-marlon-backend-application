import { AppError } from "@common/errors/AppError";
import { FakePostRepository } from "@infrastructure/data/repositories/fakes/fake-post-repository";
import { EditPostUseCase } from "./edit-post-usecase";
import { CreatePostUseCase } from "./create-post-usecase";

let repository: FakePostRepository;
let editPostUseCase: EditPostUseCase;

describe("EditPostUseCase", () => {
  beforeEach(() => {
    repository = new FakePostRepository();
    editPostUseCase = new EditPostUseCase(repository);
  });

  it("should be able to edit an existing post", async () => {
    const createPostUseCase = new CreatePostUseCase(repository);

    await createPostUseCase.execute({
      id: "1",
      title: "Post Title",
      text: "Post text",
    });

    const postUpdated = await editPostUseCase.execute({
      id: "1",
      title: "Post Title edited",
      text: "Post text edited",
    });

    expect(postUpdated.title).toBe("Post Title edited");
    expect(postUpdated.text).toBe("Post text edited");
  });

  it("should not be able to edite an non-existing post", async () => {
    await expect(
      editPostUseCase.execute({
        id: "01",
        title: "Post Title edited",
        text: "Post text edited",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
