import fs from "fs";
import path from "path";
import dayjs from "dayjs";

import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";
import PostHeader from "../../components/PostHeader";
import PostMeta from "../../components/PostMeta";

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
  console.log(attributes);
  return (
    <Layout>
      <PostHeader title={attributes.title} subtitle={attributes.description} />
      <div className="postgrid">
        <PostContent html={html} />
        <PostMeta
          date={dayjs(attributes.date).format("DD MMMM, YYYY")}
          authors={attributes.authors}
        />
      </div>
      <style jsx>{`
        .postgrid {
          display: grid;
          grid-template-columns: 75% 25%;
        }
      `}</style>
    </Layout>
  );
}
