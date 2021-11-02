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
          <div className="imageContainer">
            {post.data.cover ? (
              <Image
                src={post.data.cover.substring(post.data.cover.indexOf("/"))}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div
                style={{
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`,
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            )}
          </div>
          <div className="cardMeta">
            {post.data.category && <Tag word={post.data.category} />}
            <h3>{post.data.title}</h3>
            <p>{post.data.description}</p>
            {post.data.tags &&
              post.data.tags.map((tag) => <Tag key={tag} word={tag} />)}
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card {
          height: 15rem;
          display: grid;
          grid-template-columns: 12.5rem 1fr;
        }
        .card:hover {
          box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
        }
        .cardMeta {
          padding: 1.25vh 1.25vw;
          display: flex;
          flex-direction: column;
          gap: 1vh;
        }
        .imageContainer {
          position: relative;
        }
        h3 {
          font-size: 1.25rem;
          line-height: 1.25;
          font-weight: bold;
        }
        .date {
          width: max-content;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
