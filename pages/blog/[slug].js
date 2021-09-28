import fs from "fs";
import path from "path";

import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";
import PostHeader from "../../components/PostHeader";

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/blog"))
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

  const post = await import(`../../content/blog/${slug}.md`).catch(() => null);

  return {
    props: {
      post: post.default,
    },
  };
}

export default function BlogSlug({ post }) {
  const { html, attributes } = post;
  return (
    <Layout>
      <PostHeader
        title={attributes.title}
        subtitle={attributes.description}
        authors={attributes.authors}
      />
      <PostContent html={html} />
    </Layout>
  );
}
