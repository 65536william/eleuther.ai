import FoldersIndexHeader from "./FoldersIndexHeader";
import Folder from "./Folder";
import PostCard from "./PostCard";

export default function DisplayPostsInFolders({
  title,
  folderTitles,
  postsList,
}) {
  postsList.sort((a, b) => b.data.date - a.data.date);
  return (
    <div>
      <FoldersIndexHeader
        title={title}
        categories={postsList.map((post) => post.data.category)}
      />
      <div className="postsGrid">
        {postsList.map((post) => (
          <PostCard key={post.data.title} post={post} section={"blog"} />
        ))}
      </div>
      <style jsx>{`
        .postsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 2.5vw;
          column-gap: 2.5vh;
        }
      `}</style>
    </div>
  );
}
