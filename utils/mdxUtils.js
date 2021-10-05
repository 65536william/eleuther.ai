import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const BLOG_POSTS_PATH = path.join(process.cwd(), "content/blog");

export const blogPostsPaths = fs
  .readdirSync(BLOG_POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
