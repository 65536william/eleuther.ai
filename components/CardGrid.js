import Link from "next/link";
import IndexCard from "./IndexCard";
import Image from "next/image";

export default function CardGrid({ postArray }) {
  return (
    <div className="grid">
      {postArray.map((post) => (
        <Link href={`blog/${encodeURIComponent(post.slug)}`} passHref>
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
        }
        .colorBlock {
          width: 100%;
          height: 100px;
          background-color: orange;
        }
        h3 {
          font-size: 1.25rem;
          line-height: 1.25;
        }
      `}</style>
    </div>
  );
}
