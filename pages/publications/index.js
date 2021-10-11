import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import FolderGrid from "../../components/FolderGrid";
import FoldersIndexWrapper from "../../components/FoldersIndexWrapper";

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
  return {
    props: {
      postsList,
    },
  };
}

export default function PublicationsIndex({ postsList }) {
  return (
    <Layout>
      <FoldersIndexWrapper
        title="Publications"
        tags={postsList.map((post) => post.data.tags)}
      >
        <FolderGrid category="publications" postArray={postsList} />
      </FoldersIndexWrapper>
    </Layout>
  );
}
