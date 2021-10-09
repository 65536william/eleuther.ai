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
          margin: 0 5vw 5vh;
          width: 75%;
        }
        h1 {
          font-family: "Epilogue";
        }
        .authorsList {
          display: flex;
          gap: 0.75%;
        }
      `}</style>
    </div>
  );
}
