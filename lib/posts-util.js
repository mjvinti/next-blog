import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(filename) {
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const slug = filename.replace(/\.md$/, "");

  return { slug, ...data, content };
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles
    .map((file) => getPostData(file))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
