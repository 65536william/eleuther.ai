import Image from "next/image";

export default function PostMeta({ cover, date, authors, important }) {
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
        {important && <p>{important}</p>}
        <p>{date}</p>
        {authors?.map((author) => (
          <p key={author}>{author}</p>
        ))}
      </div>
      <style jsx>{`
        .postmeta {
          position: sticky;
          top: 12.5vh;
          height: max-content;
          width: 50%;
          margin-right: 5vw;
          background-color: rgba(0, 0, 0, 0.05);
          box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.05);
          border: thin solid rgba(0, 0, 0, 0.1);
        }
        .innerText {
          padding: 5%;
        }
        .imageContainer {
          position: relative;
          height: 10rem;
        }
      `}</style>
    </div>
  );
}
