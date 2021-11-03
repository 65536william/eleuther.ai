import FoldersIndexHeader from "./FoldersIndexHeader";
import Folder from "./Folder";
import PostCard from "./PostCard";
import dayjs from "dayjs";
import { useState } from "react";

export default function DisplayPostsInFolders({
  title,
  folderTitles,
  postsList,
}) {
  const [categoryList, setCategoryList] = useState([
    ...new Set(postsList.map((post) => post.data.category)),
  ]);
  postsList.sort((a, b) => b.data.date - a.data.date);
  const postsListByYear = postsList.reduce((acc, value) => {
    const year = dayjs(Number(value.data.date)).year();
    if (!acc[year]) {
      acc[year] = [];
    }
    if (categoryList.includes(value.data.category)) {
      acc[year].push(value);
    }
    return acc;
  }, {});
  return (
    <div>
      <FoldersIndexHeader
        title={title}
        categories={postsList.map((post) => post.data.category)}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
      <div className="foldersDisplay">
        {Object.entries(postsListByYear)
          .reverse()
          .map(([year, posts]) => (
            <div>
              <h3 className="year">{year}</h3>
              <div className="postsGrid">
                {posts.map((post) => (
                  <PostCard
                    key={post.data.title}
                    post={post}
                    section={"blog"}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <style jsx>{`
        .postsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 5vw;
          column-gap: 5vh;
        }
        .foldersDisplay {
          display: flex;
          flex-direction: column;
          gap: 5vh;
        }
        .year {
          margin-bottom: 2.5vh;
        }
      `}</style>
    </div>
  );
}
