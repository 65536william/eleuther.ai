import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import IndexWrapper from "../../components/IndexWrapper";
import matter from "gray-matter";
import CardGrid from "../../components/CardGrid";

export async function getStaticProps() {
  const postsList = fs
    .readdirSync(path.join(process.cwd(), "content/models"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "content/models"), slug)
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

export default function ModelsIndex({ postsList }) {
  return (
    <Layout>
      <IndexWrapper title="Models">
        <CardGrid postArray={postsList} />
      </IndexWrapper>
    </Layout>
  );
}
