export default function PostMeta({ date, authors }) {
  return (
    <div className="postmeta">
      <p>{date}</p>
      {authors.map((author) => (
        <p>{author}</p>
      ))}
      <style jsx>{`
        .postmeta {
          width: 25%;
          background-color: orange;
          margin-right: 5vw;
        }
      `}</style>
    </div>
  );
}
