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
      const trimmedName = fileName.substring(
        0,
        fileName.length - (fileName.length - fileName.indexOf("."))
      );
      return {
        params: {
          slug: trimmedName,
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = fs
    .readdirSync(path.join(process.cwd(), "content/blog"))
    .filter(
      (x) => x.indexOf(slug) === 0 && x.split("")[slug.length] === "."
    )[0];
  const extension = filePath.substring(slug.length, filePath.length);
  const post = await import(`../../content/blog/${slug}${extension}`).catch(
    () => null
  );

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
      <div className="postgrid">
        <PostHeader
          title={attributes.title}
          subtitle={attributes.description}
        />
        <PostMeta
          date={dayjs(attributes.date).format("DD MMMM, YYYY")}
          authors={attributes.authors}
        />
      </div>
      <PostContent html={html} />
      <style jsx>{`
        .postgrid {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </Layout>
  );
}
