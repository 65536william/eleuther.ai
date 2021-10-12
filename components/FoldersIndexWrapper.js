import { useState } from "react";
import Tag from "./Tag";

export default function FoldersIndexWrapper({ title, tags, children }) {
  const [tagList, setTagList] = useState([...new Set(tags.flat())]);
  const [childrenPosts, setChildrenPosts] = useState(children);

  return (
    <div className="index">
      <div className="header">
        <h2>{title}</h2>
        <div className="tags">
          {tagList.length &&
            tagList.map((postTag) => (
              <Tag
                key={postTag}
                word={postTag}
                clickFunction={(word) => {
                  setTagList([
                    ...new Set(tags.flat().filter((x) => x === word)),
                  ]);
                  setChildrenPosts({
                    ...childrenPosts,
                    props: {
                      ...childrenPosts.props,
                      postArray: childrenPosts.props.postArray.filter((post) =>
                        post.data.tags.includes(word)
                      ),
                    },
                  });
                }}
              />
            ))}
        </div>
      </div>
      {childrenPosts}
      <style jsx>{`
        .index {
        }
        .header {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          height: 87.5vh;
        }
        .tags {
          display: flex;
          gap: 1.25rem;
        }
        h2 {
          font-family: "Epilogue";
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
