import Layout from "../../components/Layout";
import Image from "next/image";

const importBlogPosts = async () => {
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
  const postsList = await importBlogPosts();

  return {
    props: {
      postsList,
    },
  };
}

export default function BlogIndex({ postsList }) {
  console.log(postsList);
  return (
    <Layout>
      <div className="blogIndex">
        <div>
          <h2>Blog</h2>
        </div>
        <div className="blogPosts">
          {postsList.map((blogPost) => (
            <div className="postCard">
              {blogPost.attributes.coverImage && (
                <Image
                  src={blogPost.attributes.coverImage.substring(
                    blogPost.attributes.coverImage.indexOf("/")
                  )}
                  layout="responsive"
                  width="200px"
                  height="100px"
                />
              )}
              <div className="cardMeta">
                <h3>{blogPost.attributes.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blogIndex {
          margin: 0 10vw;
        }
        .blogPosts {
          display: grid;
          grid-template-columns: repeat(4, 20vw);
          gap: 10%;
        }
        .postCard {
          border: 2px solid black;
          border-radius: 0.25rem;
        }
        .cardMeta {
          padding: 1.25rem;
        }
      `}</style>
    </Layout>
  );
}
