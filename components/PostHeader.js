export default function PostHeader({ title, subtitle, authors }) {
  return (
    <div className="postheader">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <div className="authorsList">
        {authors && authors.map((author) => <p key={author}>{author}</p>)}
      </div>
      <style jsx>{`
        .postheader {
          margin: 0 5vw 5vh;
          width: 75%;
        }
        h1 {
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
        }
        .authorsList {
          display: flex;
          gap: 0.75%;
        }
      `}</style>
    </div>
  );
}
