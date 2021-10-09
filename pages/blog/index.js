import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import IndexWrapper from "../../components/IndexWrapper";
import matter from "gray-matter";
import CardGrid from "../../components/CardGrid";
import dayjs from "dayjs";

export async function getStaticProps() {
  const postsList = fs
    .readdirSync(path.join(process.cwd(), "content/blog"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "content/blog"), slug)
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

export default function BlogIndex({ postsList }) {
  return (
    <Layout>
      <IndexWrapper
        title="Blog"
        tags={postsList
          .sort((a, b) => dayjs(b.data.date) - dayjs(a.data.date))
          .map((post) => post.data.tags)}
      >
        <CardGrid category="blog" postArray={postsList} />
      </IndexWrapper>
    </Layout>
  );
}
