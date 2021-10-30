import { useState } from "react";
import Tag from "./Tag";

export default function FoldersIndexHeader({ title, tags }) {
  const [tagList, setTagList] = useState([...new Set(tags.flat())]);

  return (
    <div className="header">
      <div className="content">
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
      <style jsx>{`
        .content {
          margin: 5vh 0vw;
        }
        .tags {
          display: flex;
          flex-direction: column;
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
