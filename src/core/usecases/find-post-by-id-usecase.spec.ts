import { FakePostRepository } from "@infrastructure/data/repositories/fakes/fake-post-repository";
import { FindPostByIdUsecase } from "./find-post-by-id-usecase";
import { CreatePostUseCase } from "./create-post-usecase";
import { AppError } from "@common/errors/AppError";

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

    expect(postFinded.id).toBe("1");
    expect(postFinded.title).toBe("Post Title");
    expect(postFinded.text).toBe("Post text");
  });

  it("should not be able to find an non existing product by id", async () => {
    await expect(findPostByIdUsecase.execute("01")).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
