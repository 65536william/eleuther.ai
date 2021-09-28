import fs from "fs";
import path from "path";

import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/publications"))
    .map((fileName) => {
      const trimmedName = fileName.substring(0, fileName.length - 3);
      return {
        params: { slug: trimmedName },
      };
    });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = await import(`../../content/publications/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      post: post.default,
    },
  };
}

export default function PublicationsSlug({ post }) {
  const { html, attributes } = post;
  return (
    <Layout>
      <PostContent html={html} />
    </Layout>
  );
}
