import Link from "next/link";
import IndexCard from "./IndexCard";
import Image from "next/image";
import Tag from "./Tag";
import categoryColors from "../styles/categoryColors";

const researchDomains = [
  {
    accessor: "llm",
    title: "Large Language Models",
  },
  {
    accessor: "mm",
    title: "Multimodal Models",
  },
  {
    accessor: "aai",
    title: "Alignment and Interpretability",
  },
  {
    accessor: "bm",
    title: "Biological ML",
  },
  {
    accessor: "aac",
    title: "AI-Assisted Creativity",
  },
  {
    accessor: "mt",
    title: "ML Theory",
  },
];

export default function CardGrid({ category, postArray }) {
  return (
    <div className="grid">
      {researchDomains.map((domain) => (
        <div key={domain.accessor} className={domain.accessor}>
          <h3>{domain.title}</h3>
        </div>
      ))}
      {/* {postArray.map((post) => (
        <Link
          href={`${encodeURIComponent(category)}/${encodeURIComponent(
            post.slug.substring(0, post.slug.indexOf("."))
          )}`}
          passHref
          key={post.slug}
        >
          <IndexCard>
            {post.data.cover ? (
              <div className="imageContainer">
                <Image
                  src={post.data.cover.substring(post.data.cover.indexOf("/"))}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ) : (
              <div className="colorBlock">&nbsp;</div>
            )}
            <div className="cardMeta">
              <h3>{post.data.title}</h3>
              <div className="tagContainer">
                {post.data.tags && <Tag word={post.data.tags[0]} />}
              </div>
              <p className="date">{post.data.date}</p>
            </div>
          </IndexCard>
        </Link>
      ))} */}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
        }
        .date {
          width: max-content;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
