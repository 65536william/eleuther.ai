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
                  key={postCategory.category}
                  word={postCategory.category}
                  active={postCategory.active}
                  clickFunction={(word, muted) => {
                    let tempCategoryList = [...categoryList];
                    if (
                      tempCategoryList.every((x) => x.active) &&
                      tempCategoryList.length > 1
                    ) {
                      tempCategoryList = tempCategoryList.map((x) => ({
                        ...x,
                        active: false,
                      }));
                      tempCategoryList[
                        tempCategoryList.findIndex((x) => x.category === word)
                      ] = { category: word, active: true };
                    } else {
                      tempCategoryList[
                        tempCategoryList.findIndex((x) => x.category === word)
                      ] = { category: word, active: !muted };
                    }
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
          flex-wrap: wrap;
        }
        h2 {
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;

          line-height: 1;
          margin-bottom: 2.5vh;
        }
        @media (max-width: 800px) {
          .tags {
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
