import PostCard from "./PostCard";

export default function Folder({ title, category, postsSubset }) {
  return (
    <div>
      <h3>{title}</h3>
      {postsSubset.map((post) => (
        <PostCard category={category} post={post} />
      ))}
    </div>
  );
}
