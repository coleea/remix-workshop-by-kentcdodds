import { prisma } from "~/db.server";

export async function getPostItem(slug : string) {
  return prisma.post.findUniqueOrThrow({where : {slug}})
}
export async function getPostListItems() {
  return prisma.post.findMany({ select: { slug: true, title: true } });
}

// 🐨 create a new function here called "getPost"
// that takes a slug and returns a post
// 💰 use the prisma.post.findUnique function
// with the "where" option set to { slug }
