import Image from "next/image";
import Tag from "./Tag";

export default function PostMeta({ cover, date, authors, category, tags }) {
  return (
    <div className="postmeta">
      {cover && (
        <div className="imageContainer">
          <Image
            src={cover.substring(cover.indexOf("/"))}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="innerText">
        <p className="date">{date}</p>
        {authors?.map((author) => (
          <p key={author}>{author}</p>
        ))}
        {category && <Tag word={category} bold />}
        {tags && tags.map((tag, index) => <Tag key={index} word={tag} />)}
      </div>
      <style jsx>{`
        .postmeta {
          position: sticky;
          top: 12.5vh;
          height: max-content;
          width: 50%;
          margin: 0 auto;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.25);
          border: thin solid rgba(0, 0, 0, 0.25);
        }
        .date {
          font-style: italic;
        }
        .imageContainer {
          position: relative;
          height: 10rem;
        }
      `}</style>
    </div>
  );
}
