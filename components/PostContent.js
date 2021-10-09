import GenericCitation from "./GenericCitation";

export default function PostContent({ children }) {
  return (
    <>
      <article>{children}</article>
      <GenericCitation frontmatter={children.props.scope} />
      <style jsx>{`
        article {
          margin: 0 5vw 5vh;
          display: flex;
          flex-direction: column;
          gap: 1.5vh;
          max-width: 1000px;
        }
        h2 {
          font-weight: bold;
        }
        table {
          table-layout: fixed;
          font-size: 1.125rem;
          line-height: 2;
          border-style: hidden;
        }

        th {
          font-family: "Epilogue";
        }

        th,
        td {
          text-align: center;
          border: thin solid rgba(0, 0, 0, 0.125);
        }

        tbody tr:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        a {
          font-style: italic;
          text-decoration: underline;
          color: inherit;
        }

        a:hover {
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
