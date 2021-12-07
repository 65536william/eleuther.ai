import FoldersIndexHeader from "./FoldersIndexHeader";
import Folder from "./Folder";
import PostCard from "./PostCard";
import dayjs from "dayjs";
import { useState } from "react";

export default function DisplayPostsInFolders({ title, postsList }) {
  const filteredPosts = postsList
    .map((post) => ({
      category: post.data.category,
      active: true,
    }))
    .filter(
      (thing, index, self) =>
        index === self.findIndex((t) => t.category === thing.category)
    );
  const [categoryList, setCategoryList] = useState(filteredPosts);
  postsList.sort((a, b) => b.data.date - a.data.date);
  const postsListByYear = postsList.reduce((acc, value) => {
    const year = dayjs(Number(value.data.date)).year();
    if (!acc[year]) {
      acc[year] = [];
    }
    if (
      categoryList.some(
        (x) => x.category === value.data.category && x.active === true
      )
    ) {
      acc[year].push(value);
    }
    return acc;
  }, {});
  return (
    <div>
      <FoldersIndexHeader
        key={Object.entries(categoryList)}
        title={title}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
      <div className="foldersDisplay">
        {Object.entries(postsListByYear)
          .reverse()
          .map(([year, posts]) => (
            <div key={year}>
              <h3 className="year">{year}</h3>
              <div className="postsGrid">
                {posts.map((post) => (
                  <PostCard
                    key={post.data.title}
                    post={post}
                    section={title.toLowerCase()}
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
          column-gap: 150px;
          row-gap: 50px;
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
