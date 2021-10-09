import path from "path";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import "katex/dist/katex.min.css";

import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent";
import PostHeader from "../../components/PostHeader";
import PostMeta from "../../components/PostMeta";

import { MDXRemote } from "next-mdx-remote";
import { InlineMath, BlockMath } from "react-katex";

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/datasets"))
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const datasetPostPath = path.join(
    path.join(process.cwd(), "content/datasets"),
    `${params.slug}.mdx`
  );
  const source = fs.readFileSync(datasetPostPath);

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

export default function DatasetSlug({ source, frontMatter }) {
  return (
    <Layout>
      <div className="postgrid">
        <div>
          <PostHeader
            title={frontMatter.title}
            subtitle={frontMatter.description}
          />
          <PostContent>
            <MDXRemote {...source} components={components} />
          </PostContent>
        </div>
        <PostMeta
          cover={frontMatter.cover}
          date={dayjs(frontMatter.date).format("DD MMMM, YYYY")}
          authors={frontMatter.authors}
        />
      </div>
      <style jsx>{`
        .postgrid {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </Layout>
  );
}
