import PostCard from "./PostCard";

export default function Folder({ title, category, postsSubset }) {
  return (
    <div className="folder">
      <h3>{title}</h3>
      <div className="folderColumn">
        {postsSubset.map((post) => (
          <PostCard key={post.slug} category={category} post={post} />
        ))}
      </div>
      <style jsx>{`
        .folder {
          margin: 5vh 0vw;
        }
        h3 {
          margin-bottom: 2.5vh;
        }
        .folderColumn {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
      `}</style>
    </div>
  );
}
