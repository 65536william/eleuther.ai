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
  console.log(postsList.length);
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
        <div className="postsColumn">
          <h3>Breakthroughs</h3>
          <div className="posts">
            {postsList
              .slice()
              .filter((post) => post.data.breakthrough)
              .map((post) => (
                <PostCard
                  key={post.data.title}
                  category="publications"
                  post={post}
                />
              ))}
          </div>
        </div>
        <div className="postsColumn">
          <h3>Latest</h3>
          <div className="posts">
            {postsList
              .sort((a, b) => b.data.date - a.data.date)
              .slice()
              .splice(0, 4)
              .map((post) => (
                <PostCard
                  key={post.data.title}
                  category="publications"
                  post={post}
                />
              ))}
          </div>
        </div>
      </div>
      <FolderGrid category="publications" postArray={postsList} />
      <style jsx>{`
        .topDiv {
          height: 90vh;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 25px;
        }
        .postsColumn {
          margin: 10vh 0;
        }
        .posts {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        h3 {
          margin-bottom: 2.5vh;
          margin-left: 2.5vw;
        }
      `}</style>
    </Layout>
  );
}
