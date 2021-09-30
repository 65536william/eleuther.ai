export default function PostHeader({ title, subtitle, authors }) {
  return (
    <div className="postheader">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className="authorsList">
        {authors && authors.map((author) => <p>{author}</p>)}
      </div>
      <style jsx>{`
        .postheader {
          margin: 5vh 5vw;
          width: 75%;
        }
        h1 {
          font-family: "Epilogue";
          margin-bottom: 0.75%;
        }
        h2 {
          margin-bottom: 0.75%;
        }
        .authorsList {
          display: flex;
          gap: 0.75%;
        }
      `}</style>
    </div>
  );
}
