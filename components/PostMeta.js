import Image from "next/image";
import Tag from "./Tag";

export default function PostMeta({ date, authors, category, link }) {
  return (
    <div className="postmeta">
      <span className="date">{date}</span>
      {category && <Tag word={category} bold />}
      {authors?.map((author) => (
        <span key={author} className="author">
          {author}
        </span>
      ))}
      {link && <a href={link}>View →</a>}
      {/* {tags && tags.map((tag, index) => <Tag key={index} word={tag} />)} */}
      <style jsx>{`
        .postmeta {
          position: sticky;
          top: 12.5vh;
          height: max-content;
          width: 50%;
          margin: 0 auto;
          background: white;
          padding: 1.5rem;
          box-shadow: 0 0.5vw 1vw 0 rgba(0, 0, 0, 0.25);
          border: thin solid rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 1vh;
        }
        .date {
          font-style: italic;
        }
        .author {
          font-weight: bold;
        }
        @media (max-width: 875px) {
          .postmeta {
            position: static;
            padding: 0.75rem;
            width: calc(100% - 1.5rem);
            margin-bottom: 3vh;
          }
        }
      `}</style>
    </div>
  );
}
