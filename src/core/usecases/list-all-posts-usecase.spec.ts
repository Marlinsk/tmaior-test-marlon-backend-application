import { FakePostRepository } from "@infrastructure/database/repositories/implementations/fakes/fake-post-repository";
import { CreatePostUseCase } from "./create-post-usecase";
import { ListAllPostsUseCase } from "./list-all-posts-usecase";

let repository: FakePostRepository;
let listAllPostsUseCase: ListAllPostsUseCase;

describe("ListAllPostsUseCase", () => {
  beforeAll(() => {
    repository = new FakePostRepository();
    listAllPostsUseCase = new ListAllPostsUseCase(repository);
  });

  it("should be able to find all existing posts", async () => {
    const createPostUseCase = new CreatePostUseCase(repository);

    await createPostUseCase.execute({
      id: "1",
      title: "Post Title",
      text: "Post text",
    });

    const posts = await listAllPostsUseCase.execute();

    expect(posts).not.toBeNull();
  });
});
