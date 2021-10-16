import { useState } from "react";
import Tag from "./Tag";

export default function FoldersIndexHeader({ title, tags }) {
  const [tagList, setTagList] = useState([...new Set(tags.flat())]);

  return (
    <div className="header">
      <h2>{title}</h2>
      <div className="tags">
        {tagList.length &&
          tagList.map((postTag) => (
            <Tag
              key={postTag}
              word={postTag}
              clickFunction={(word) => {
                setTagList([...new Set(tags.flat().filter((x) => x === word))]);
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
      <style jsx>{`
        .header {
          padding-top: 15vh;
          padding-left: 2.5vw;
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
