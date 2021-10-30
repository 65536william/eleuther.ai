import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import DisplayPostsInFolders from "../../components/DisplayPostsInFolders";

export async function getStaticProps() {
  const postsList = fs
    .readdirSync(path.join(process.cwd(), "content/datasets"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "content/datasets"), slug)
      );
      const { data } = matter(source);
      return {
        data,
        slug,
      };
    });
  return {
    props: {
      postsList,
    },
  };
}

export default function DatasetsIndex({ postsList }) {
  let folderTitles = [];
  postsList.forEach((post) => folderTitles.push(post.data.tags[0]));

  return (
    <Layout>
      <DisplayPostsInFolders
        title="Projects"
        folderTitles={[...new Set(folderTitles)]}
        postsList={postsList}
      />
    </Layout>
  );
}
