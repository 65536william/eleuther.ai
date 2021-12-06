import { useState } from "react";
import Category from "./Category";

export default function FoldersIndexHeader({
  title,
  categoryList,
  setCategoryList,
}) {
  return (
    <div className="header">
      <div className="content">
        <h2>{title}</h2>
        <div className="tags">
          {categoryList.length &&
            categoryList.map((postCategory) => {
              return (
                <Category
                  key={postCategory.category + postCategory.muted}
                  word={postCategory.category}
                  muted={postCategory.muted}
                  clickFunction={(word, muted) => {
                    const tempCategoryList = categoryList.map((cat) => ({
                      ...cat,
                    }));
                    tempCategoryList[
                      tempCategoryList.findIndex((x) => x.category === word)
                    ] = { category: word, muted: !muted };
                    setCategoryList(tempCategoryList);
                  }}
                />
              );
            })}
        </div>
      </div>
      <style jsx>{`
        .content {
          margin: 5vh 0vw;
          display: flex;
          flex-direction: column;
        }
        .tags {
          display: flex;
          gap: 1.25rem;
        }
        h2 {
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;

          line-height: 1;
          margin-bottom: 2.5vh;
        }
      `}</style>
    </div>
  );
}
