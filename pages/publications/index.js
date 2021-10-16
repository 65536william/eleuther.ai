import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import FolderGrid from "../../components/FolderGrid";
import FoldersIndexHeader from "../../components/FoldersIndexHeader";
import IndexCard from "../../components/IndexCard";
import Image from "next/image";
import PostCard from "../../components/PostCard";

export async function getStaticProps() {
  const postsList = fs
    .readdirSync(path.join(process.cwd(), "content/publications"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "content/publications"), slug)
      );
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

export default function PublicationsIndex({ postsList }) {
  return (
    <Layout>
      <div className="topDiv">
        <FoldersIndexHeader
          title="Publications"
          tags={postsList.map((post) => post.data.tags)}
        />
        <div>
          <h3>Breakthroughs</h3>
          <div className="posts">
            {postsList
              .filter((post) => post.data.breakthrough)
              .map((post) => (
                <PostCard category="publications" post={post} />
              ))}
          </div>
        </div>
        <div>
          <h3>Latest</h3>
        </div>
      </div>
      <FolderGrid category="publications" postArray={postsList} />
      <style jsx>{`
        .topDiv {
          height: 90vh;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .posts {
          display: flex;
          flex-direction: column;
          gap: 5vh;
        }
        h3 {
          padding-top: 15vh;
          padding-left: 2.5vw;
          text-decoration: underline;
          margin-bottom: 5vh;
        }
      `}</style>
    </Layout>
  );
}
