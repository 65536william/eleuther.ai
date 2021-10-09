import Tag from "./Tag";

export default function IndexWrapper({ title, tags, children }) {
  return (
    <div className="index">
      <h2>{title}</h2>
      {[...new Set(tags)].map((postTags) => (
        <Tag word={postTags[0]} />
      ))}
      {children}
      <style jsx>{`
        .index {
          margin: 0 10vw;
        }
        h2 {
          font-family: "Epilogue";
        }
      `}</style>
    </div>
  );
}
