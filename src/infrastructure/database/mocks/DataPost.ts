import { prisma } from "@providers/prisma.client";

export async function initialDataPost() {
  const posts = await prisma.posts.findMany();

  if (posts.length <= 0) {
    await prisma.posts.createMany({
      data: [
        { title: "Hello world", text: "Hey! I'm AWS!" },
        {
          title: "Application is alive!",
          text: "Application successfully launched in AWS!",
        },
        {
          title: "Launch application in ECS2",
          text: "Hey! I'm running on ECS2",
        },
      ],
    });
    console.log("Mock data added to the database!");
  }
}
