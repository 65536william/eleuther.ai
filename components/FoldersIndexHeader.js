import { useState } from "react";
import Tag from "./Tag";

export default function FoldersIndexHeader({ title, categories }) {
  const [categoryList, setCategoryList] = useState([
    ...new Set(categories.flat()),
  ]);

  return (
    <div className="header">
      <div className="content">
        <h2>{title}</h2>
        <div className="tags">
          {categoryList.length &&
            categoryList.map((postCategory) => (
              <Tag
                key={postCategory}
                word={postCategory}
                clickFunction={(word) => {
                  setCategoryList([
                    ...new Set(categories.flat().filter((x) => x === word)),
                  ]);
                  setChildrenPosts({
                    ...childrenPosts,
                    props: {
                      ...childrenPosts.props,
                      postArray: childrenPosts.props.postArray.filter(
                        (post) => post.data.category === word
                      ),
                    },
                  });
                }}
              />
            ))}
        </div>
      </div>
      <style jsx>{`
        .content {
          margin: 5vh 0vw;
          display: flex;
          flex-direction: column;
          align-items: center;
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
