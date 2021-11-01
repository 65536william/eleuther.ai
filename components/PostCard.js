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
            {post.data.category && <Tag word={post.data.category} />}
            {post.data.tags &&
              post.data.tags.map((tag) => <Tag key={tag} word={tag} />)}
            <h3>{post.data.title}</h3>
            <p>{post.data.description}</p>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card {
          height: 10rem;
          display: flex;
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
          width: 25rem;
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
