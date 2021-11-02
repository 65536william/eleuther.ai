import FoldersIndexHeader from "./FoldersIndexHeader";
import Folder from "./Folder";
import PostCard from "./PostCard";
import dayjs from "dayjs";

export default function DisplayPostsInFolders({
  title,
  folderTitles,
  postsList,
}) {
  postsList.sort((a, b) => b.data.date - a.data.date);
  const postsListByYear = postsList.reduce((acc, value) => {
    const year = dayjs(Number(value.data.date)).year();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(value);
    return acc;
  }, {});
  return (
    <div>
      <FoldersIndexHeader
        title={title}
        categories={postsList.map((post) => post.data.category)}
      />
      {Object.entries(postsListByYear)
        .reverse()
        .map(([year, posts]) => (
          <div>
            <h3>{year}</h3>
            <div className="postsGrid">
              {posts.map((post) => (
                <PostCard key={post.data.title} post={post} section={"blog"} />
              ))}
            </div>
          </div>
        ))}
      <style jsx>{`
        .postsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 5vw;
          column-gap: 5vh;
        }
      `}</style>
    </div>
  );
}
