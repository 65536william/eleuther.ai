import path from "path";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";

import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";
import PostHeader from "../../components/PostHeader";
import PostMeta from "../../components/PostMeta";

import { blogPostsPaths, BLOG_POSTS_PATH } from "../../utils/mdxUtils";
import { MDXRemote } from "next-mdx-remote";
import { InlineMath, BlockMath } from "react-katex";

export const getStaticPaths = async () => {
  const paths = blogPostsPaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const blogPostPath = path.join(BLOG_POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(blogPostPath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

const components = {
  InlineMath,
  BlockMath,
};

export default function BlogSlug({ source, frontMatter }) {
  return (
    <Layout>
      <div className="postgrid">
        <PostHeader
          title={frontMatter.title}
          subtitle={frontMatter.description}
        />
        <PostMeta
          date={dayjs(frontMatter.date).format("DD MMMM, YYYY")}
          authors={frontMatter.authors}
        />
      </div>
      <MDXRemote {...source} components={components} />
      <style jsx>{`
        .postgrid {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </Layout>
  );
}
