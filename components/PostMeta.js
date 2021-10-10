import Image from "next/image";

export default function PostMeta({ cover, date, authors, important }) {
  return (
    <div className="postmeta">
      {cover && (
        <Image
          src={cover.substring(cover.indexOf("/"))}
          layout="responsive"
          width="200px"
          height="100px"
        />
      )}
      <div className="innerText">
        {important && <p>{important}</p>}
        <p>{date}</p>
        {authors?.map((author) => (
          <p>{author}</p>
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
      `}</style>
    </div>
  );
}
