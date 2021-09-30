export default function PostContent({ html }) {
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: html }} />
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
