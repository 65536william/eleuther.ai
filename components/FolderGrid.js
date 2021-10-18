import Link from "next/link";
import IndexCard from "./IndexCard";
import Image from "next/image";
import Tag from "./Tag";
import categoryColors from "../styles/categoryColors";
import PostCard from "../components/PostCard";

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
        <div key={domain.accessor} className={domain.accessor + " test"}>
          <h3>{domain.title}</h3>
          {postArray
            .filter((post) => post.data.tags.includes(domain.title))
            .map((post) => (
              <PostCard category="publications" post={post} />
            ))}
        </div>
      ))}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 100vh 100vh;
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
