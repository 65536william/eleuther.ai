import Link from "next/link";
import Tag from "./Tag";

export default function PostCard({ section, post }) {
  return (
    <>
      <Link
        href={`${encodeURIComponent(section)}/${encodeURIComponent(
          post.slug.substring(0, post.slug.indexOf("."))
        )}`}
        passHref
        key={post.slug}
      >
        <div className="card">
          <h3 className="cardTitle">{post.data.title}</h3>
          <p>{post.data.description}</p>
          <div style={{ alignSelf: "flex-end" }}>
            <Tag word={post.data.category} bold />
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card {
          background-color: white;
          padding: 5%;
          transition: all 0.2s ease-in-out;
          border: thin solid rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 1.5vh;
        }
        .card:hover {
          box-shadow: 0 0.5vw 1vw 0 rgba(0, 0, 0, 0.25);
          transform: scale(1.01);
        }
        .cardTitle {
          font-weight: normal;
        }
        @media (max-width: 875px) {
          p {
            font-size: 1rem;
            line-height: 1.25;
          }
        }
      `}</style>
    </>
  );
}
