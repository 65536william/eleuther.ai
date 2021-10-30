import GenericCitation from "./GenericCitation";

export default function PostContent({ children }) {
  return (
    <div className="post">
      <article>{children}</article>
      <GenericCitation frontmatter={children.props.scope} />
      <style jsx>{`
        .post {
          display: flex;
          flex-direction: column;
          gap: 2.5vh;
        }
        article {
          display: flex;
          flex-direction: column;
          gap: 1.5vh;
        }
        h2 {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
