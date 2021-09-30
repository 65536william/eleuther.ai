export default function PostMeta({ date, authors }) {
  return (
    <div>
      <p>{date}</p>
      {authors.map((author) => (
        <p>{author}</p>
      ))}
    </div>
  );
}
