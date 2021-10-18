import Link from "next/link";
import IndexCard from "./IndexCard";
import Image from "next/image";
import Tag from "./Tag";
import categoryColors from "../styles/categoryColors";

export default function PostCard({ category, post }) {
  return (
    <>
      <Link
        href={`${encodeURIComponent(category)}/${encodeURIComponent(
          post.slug.substring(0, post.slug.indexOf("."))
        )}`}
        passHref
        key={post.slug}
      >
        <div className="card">
          {post.data.cover && (
            <div className="imageContainer">
              <Image
                src={post.data.cover.substring(post.data.cover.indexOf("/"))}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className="cardMeta">
            <div className="tagContainer">
              {post.data.tags && <Tag word={post.data.tags[0]} />}
            </div>
            <p className="date">{post.data.date}</p>
            <h3>{post.data.title}</h3>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card {
          border: thin solid rgba(0, 0, 0, 0.05);
        }
        .card:hover {
          box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
        }
        .cardMeta {
          padding: 1.25vh 1.25vw;
          display: flex;
          flex-direction: column;
          gap: 1vh;
        }
        .imageContainer {
          position: relative;
          height: 10rem;
        }
        .colorBlock {
          width: 100%;
          height: 100px;
          background-color: ${categoryColors[category]};
        }
        h3 {
          font-size: 1.25rem;
          line-height: 1.25;
          font-weight: normal;
        }
        .date {
          width: max-content;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
