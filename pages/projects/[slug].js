import fs from "fs";
import path from "path";

import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/projects"))
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

  const post = await import(`../../content/projects/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      post: post.default,
    },
  };
}

export default function ProjectsSlug({ post }) {
  const { html, attributes } = post;
  return (
    <Layout>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </Layout>
  );
}
