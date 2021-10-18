import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import FolderGrid from "../../components/FolderGrid";
import FoldersIndexHeader from "../../components/FoldersIndexHeader";
import IndexCard from "../../components/IndexCard";
import Image from "next/image";
import PostCard from "../../components/PostCard";
import DisplayPostsInFolders from "../../components/DisplayPostsInFolders";

export async function getStaticProps() {
  const postsList = fs
    .readdirSync(path.join(process.cwd(), "content/publications"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "content/publications"), slug)
      );
      const { data } = matter(source);
      return {
        data,
        slug,
      };
    });
  console.log(postsList.length);
  return {
    props: {
      postsList,
    },
  };
}

const folderTitles = [
  "Large Language Models",
  "Multimodal Models",
  "Alignment and Interpretability",
  "Biological ML",
  "AI-Assisted Creativity",
  "ML Theory",
];

export default function PublicationsIndex({ postsList }) {
  return (
    <Layout>
      <DisplayPostsInFolders
        title="Publications"
        folderTitles={folderTitles}
        postsList={postsList}
      />
    </Layout>
  );
}
