import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import IndexCard from "../../components/IndexCard";

const importPosts = async () => {
  const markdownFiles = require
    .context("../../content/blog", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blog/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export async function getStaticProps() {
  const postsList = await importPosts();

  return {
    props: {
      postsList,
    },
  };
}

export default function BlogIndex({ postsList }) {
  return (
    <Layout>
      <div className="blogIndex">
        <div>
          <h2>Blog</h2>
        </div>
        <div className="blogPosts">
          {postsList.map((blogPost) => (
            <Link href={`blog/${encodeURIComponent(blogPost.slug)}`} passHref>
              <IndexCard>
                {blogPost.attributes.cover && (
                  <Image
                    src={blogPost.attributes.cover.substring(
                      blogPost.attributes.cover.indexOf("/")
                    )}
                    layout="responsive"
                    width="200px"
                    height="100px"
                  />
                )}
                <div className="cardMeta">
                  <h3>{blogPost.attributes.title}</h3>
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
