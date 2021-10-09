import GenericCitation from "./GenericCitation";

export default function PostContent({ children }) {
  return (
    <>
      <article>{children}</article>
      <GenericCitation frontmatter={children.props.scope} />
      <style jsx>{`
        article {
          margin: 0 5vw;
          display: flex;
          flex-direction: column;
          gap: 1.5vh;
          max-width: 1000px;
        }
        h2 {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
