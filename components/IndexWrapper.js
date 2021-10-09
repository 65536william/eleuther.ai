import Tag from "./Tag";

export default function IndexWrapper({ title, tags, children }) {
  return (
    <div className="index">
      <div className="header">
        <h2>{title}</h2>
        <div className="tags">
          {tags.length &&
            [...new Set(tags.flat())].map((postTag) => <Tag word={postTag} />)}
        </div>
      </div>
      {children}
      <style jsx>{`
        .index {
          margin: 0 10vw;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 5vh;
        }
        .tags {
          display: flex;
          gap: 1.25rem;
        }
        h2 {
          font-family: "Epilogue";
        }
      `}</style>
    </div>
  );
}
