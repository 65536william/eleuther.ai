import Link from "next/link";
import IndexCard from "./IndexCard";
import Image from "next/image";
import Tag from "./Tag";
import categoryColors from "../styles/categoryColors";

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
          <div className="cardMeta">
            <h3>{post.data.title}</h3>
            <p>{post.data.description}</p>
            {post.data.tags?.map((tag) => (
              <Tag key={tag} word={tag} bold />
            ))}
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card {
          display: flex;
          gap: 1.5rem;
          background-color: white;
          border-radius: 0.25rem;
          transition: all 0.2s ease-in-out;
          border: thin solid rgba(0, 0, 0, 0.25);
        }
        .card:hover {
          box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.25);
          transform: scale(1.01);
        }
        h3 {
          font-size: 1.25rem;
          line-height: 1.25;
          font-weight: bold;
        }
        p {
          font-size: 1.25rem;
          line-height: 1.25;
        }
        @media (max-width: 800px) {
          p {
            font-size: 1rem;
            line-height: 1.25;
          }
        }
      `}</style>
    </>
  );
}
