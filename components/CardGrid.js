import Link from "next/link";
import IndexCard from "./IndexCard";
import Image from "next/image";
import Tag from "./Tag";
import categoryColors from "../styles/categoryColors";

export default function CardGrid({ category, postArray }) {
  return (
    <div className="grid">
      {postArray.map((post) => (
        <Link
          href={`${encodeURIComponent(category)}/${encodeURIComponent(
            post.slug.substring(0, post.slug.indexOf("."))
          )}`}
          passHref
        >
          <IndexCard>
            {post.data.cover ? (
              <Image
                src={post.data.cover.substring(post.data.cover.indexOf("/"))}
                layout="responsive"
                width="200px"
                height="100px"
              />
            ) : (
              <div className="colorBlock">&nbsp;</div>
            )}
            <div className="cardMeta">
              <h3>{post.data.title}</h3>
              <div className="tagContainer">
                {post.data.tags && <Tag word={post.data.tags[0]} />}
              </div>
            </div>
          </IndexCard>
        </Link>
      ))}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 5rem;
        }
        .cardMeta {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .tagContainer {
          align-self: flex-end;
        }
        .colorBlock {
          width: 100%;
          height: 100px;
          background-color: ${categoryColors[category]};
        }
        h3 {
          font-size: 1.25rem;
          line-height: 1.25;
        }
      `}</style>
    </div>
  );
}
