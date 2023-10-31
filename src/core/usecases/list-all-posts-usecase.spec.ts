import { FakePostRepository } from "@infrastructure/data/repositories/fakes/fake-post-repository";
import { ListAllPostsUseCase } from "./list-all-posts-usecase";
import { CreatePostUseCase } from "./create-post-usecase";

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
