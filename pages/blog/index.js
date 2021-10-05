import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import IndexCard from "../../components/IndexCard";
import { blogPostsPaths, BLOG_POSTS_PATH } from "../../utils/mdxUtils";
import matter from "gray-matter";
import Latex from "react-latex";
import "katex/dist/katex.min.css";

export async function getStaticProps() {
  const postsList = blogPostsPaths.map((slug) => {
    const source = fs.readFileSync(path.join(BLOG_POSTS_PATH, slug));
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
      <html>
        <head>
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
          />
        </head>
      </html>
      <div className="blogIndex">
        <div>
          <h2>Blog</h2>
        </div>
        <div className="blogPosts">
          {postsList.map((blogPost) => (
            <Link href={`blog/${encodeURIComponent(blogPost.slug)}`} passHref>
              <IndexCard>
                {blogPost.data.cover && (
                  <Image
                    src={blogPost.data.cover.substring(
                      blogPost.data.cover.indexOf("/")
                    )}
                    layout="responsive"
                    width="200px"
                    height="100px"
                  />
                )}
                <div className="cardMeta">
                  <h3>{blogPost.data.title}</h3>
                </div>
              </IndexCard>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blogIndex {
          margin: 0 10vw;
        }
        .blogPosts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 5rem;
        }
        .cardMeta {
          padding: 1.25rem;
        }
      `}</style>
    </Layout>
  );
}
