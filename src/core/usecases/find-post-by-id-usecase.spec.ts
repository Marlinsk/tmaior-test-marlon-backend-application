import { AppError } from "@common/errors/AppError";
import { FakePostRepository } from "@infrastructure/database/repositories/implementations/fakes/fake-post-repository";
import { CreatePostUseCase } from "./create-post-usecase";
import { FindPostByIdUsecase } from "./find-post-by-id-usecase";

let repository: FakePostRepository;
let findPostByIdUsecase: FindPostByIdUsecase;

describe("FindPostByIdUsecase", () => {
  beforeAll(() => {
    repository = new FakePostRepository();
    findPostByIdUsecase = new FindPostByIdUsecase(repository);
  });

  it("should be able to find an existing post by id", async () => {
    const createPostUseCase = new CreatePostUseCase(repository);

    await createPostUseCase.execute({
      id: "1",
      title: "Post Title",
      text: "Post text",
    });

    const postFinded = await findPostByIdUsecase.execute("1");

    expect(postFinded.getId).toBe("1");
    expect(postFinded.getTitle).toBe("Post Title");
    expect(postFinded.getText).toBe("Post text");
  });

  it("should not be able to find an non existing product by id", async () => {
    await expect(findPostByIdUsecase.execute("01")).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
