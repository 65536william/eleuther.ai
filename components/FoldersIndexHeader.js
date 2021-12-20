import { useState } from "react";
import Category from "./Category";

export default function FoldersIndexHeader({
  title,
  categoryList,
  setCategoryList,
}) {
  return (
    <div>
      <div className="content">
        <h2>{title}</h2>
        <div className="categories">
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
                    if (tempCategoryList.every((x) => !x.active)) {
                      tempCategoryList = tempCategoryList.map((x) => ({
                        ...x,
                        active: true,
                      }));
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
          gap: 1.5vh;
        }
        .categories {
          display: flex;
          gap: 1.5vw;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
