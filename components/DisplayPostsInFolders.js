import FoldersIndexHeader from "./FoldersIndexHeader";
import Folder from "./Folder";

export default function DisplayPostsInFolders({
  title,
  folderTitles,
  postsList,
}) {
  postsList.sort((a, b) => b.data.date - a.data.date);
  const category = title.toLowerCase();
  return (
    <div>
      <div className="topDiv">
        <FoldersIndexHeader
          title={title}
          tags={postsList.map((post) => post.data.tags)}
        />
        <Folder
          title="Breakthroughs"
          category={category}
          postsSubset={postsList.filter((post) => post.data.breakthrough)}
        />
        <Folder
          title="Latest"
          category={category}
          postsSubset={postsList.slice(0, 4)}
        />
        {folderTitles.map((folderTitle) => (
          <Folder
            key={folderTitle}
            title={folderTitle}
            category={category}
            postsSubset={postsList.filter(
              (post) => post.data.category === folderTitle
            )}
          />
        ))}
      </div>
      <style jsx>{`
        .topDiv {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 90vh 100vh;
          column-gap: 25px;
        }
      `}</style>
    </div>
  );
}
