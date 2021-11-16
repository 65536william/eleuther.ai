import Layout from "../components/Layout";
import Link from "next/link";
import LinkCard from "../components/LinkCard";
import SquareCard from "../components/SquareCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

const sitemap = [
  {
    name: "Blog",
    slug: "blog",
    color: "var(--blog-color)",
  },
  {
    name: "Projects",
    slug: "blog",
    color: "var(--projects-color)",
  },
  {
    name: "Publications",
    slug: "blog",
    color: "var(--publications-color)",
  },
  {
    name: "Datasets",
    slug: "blog",
    color: "var(--datasets-color)",
  },
  {
    name: "Models",
    slug: "blog",
    color: "var(--models-color)",
  },
];

const links = [
  {
    name: "FAQ",
    slug: "blog",
    bgColor: "var(--faq-color)",
  },
  {
    name: "Discord",
    slug: "blog",
    bgColor: "var(--discord-color)",
  },
  {
    name: "GitHub",
    slug: "blog",
    bgColor: "var(--github-color)",
  },
  {
    name: "Get involved",
    slug: "get-involved",
    bgColor: "var(--github-color)",
  },
];

export default function Index({ announcementsList }) {
  console.log(announcementsList);
  return (
    <Layout>
      <div className="container">
        <div>
          <h2>
            A grassroots collective of researchers working to open source AI
            research.
          </h2>
          <p>
            EleutherAI (/iˈluθər eɪ. aɪ/) is a decentralized grassroots
            collective of volunteer researchers, engineers, and developers
            focused on AI alignment, scaling, and open source AI research.
            Founded in July of 2020, our flagship project is the GPT-Neo family
            of models designed to replicate those developed by OpenAI as GPT-3.
            Our Discord server is open and welcomes contributors.
          </p>
          <div className="sitemapStack">
            {sitemap.map((link) => (
              <LinkCard
                key={link.name}
                slug={"/" + link.slug}
                text={link.name}
                color={link.color}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <h4>Announcements</h4>
            {announcementsList.map((announcement) => (
              <div>
                <p>{dayjs(announcement.data.date).format("YYYY-MM-DD")}</p>
                <p>{announcement.data.title}</p>
                <p>{announcement.content}</p>
              </div>
            ))}
          </div>
          <div className="linksStack">
            {links.map((link) => (
              <SquareCard
                key={link.name}
                slug={"/"}
                text={link.name}
                bgColor={link.bgColor}
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 150px;
          }
          h2 {
            font-size: 1.25rem;
            font-weight: bold;
          }
          .sitemapStack {
            margin-top: 2.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .linksStack {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const announcementsList = fs
    .readdirSync(path.join(process.cwd(), "content/announcements"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((slug) => {
      const source = fs.readFileSync(
        path.join(path.join(process.cwd(), "content/announcements"), slug)
      );
      const { data, content } = matter(source);
      return {
        data,
        content,
      };
    });
  return {
    props: {
      announcementsList,
    },
  };
}
