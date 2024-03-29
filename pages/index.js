import Layout from "../components/Layout";
import Link from "next/link";
import LinkCard from "../components/LinkCard";
import SquareCard from "../components/SquareCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import PostCard from "../components/PostCard";
import AnnouncementCard from "../components/AnnouncementCard";

const sitemap = [
  {
    name: "Blog",
    slug: "blog",
    color: "var(--red)",
  },
  {
    name: "Projects",
    slug: "projects",
    color: "var(--yellow)",
  },
  {
    name: "Publications",
    slug: "publications",
    color: "var(--green)",
  },
  {
    name: "Datasets",
    slug: "datasets",
    color: "var(--blue)",
  },
  {
    name: "Models",
    slug: "models",
    color: "var(--purple)",
  },
];

const links = [
  {
    name: "GitHub",
    slug: "https://github.com/EleutherAI",
    bgColor: "var(--black)",
  },
  {
    name: "Discord",
    slug: "https://discord.com/invite/zBGx3azzUn",
    bgColor: "var(--gray)",
  },
  {
    name: "FAQ",
    slug: "/faq",
    bgColor: "var(--orange)",
  },
  {
    name: "Get involved",
    slug: "/get-involved",
    bgColor: "var(--teal)",
  },
];

export default function Index({ announcementsList }) {
  return (
    <Layout>
      <div className="container">
        <div className="column">
          <p className="tagline">
            A grassroots collective of researchers working to open source AI
            research.
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
          <div className="linksStack">
            {links.map((link) => (
              <LinkCard
                key={link.name}
                slug={link.slug}
                text={link.name}
                color={link.bgColor}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <p className="about">
            EleutherAI (/iˈluθər eɪ. aɪ/) is a decentralized grassroots
            collective of volunteer researchers, engineers, and developers
            focused on AI alignment, scaling, and open source AI research.
            Founded in July of 2020, our flagship project is the GPT-Neo family
            of models designed to replicate those developed by OpenAI as GPT-3.
            Our Discord server is open and welcomes contributors.
          </p>

          <div className="announcementsStack">
            {announcementsList.map((announcement, index) => (
              <AnnouncementCard
                key={`${announcement.data.date}` + `_${index}`}
                title={announcement.data.title}
                date={announcement.data.date}
                content={announcement.content}
                link={announcement.data.link}
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 7.5vw;
          }
          .column {
            display: flex;
            flex-direction: column;
            gap: 5vh;
          }
          .sitemapStack {
            display: flex;
            flex-direction: column;
            gap: 3vh;
          }
          .linksStack {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3vh;
          }
          .tagline {
            font-size: 1.25rem;
          }
          .announcementsStack {
            display: flex;
            flex-direction: column;
            gap: 3vh;
          }
          .headAnnouncements {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1vh;
          }
          @media (max-width: 875px) {
            .container {
              grid-template-columns: 1fr;
              gap: 3vh;
            }
            .tagline {
              font-size: 1rem;
            }
            .linksStack {
              grid-template-columns: 1fr;
            }
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
    })
    .sort((a, b) => b.data.date - a.data.date)
    .slice(0, 4);
  return {
    props: {
      announcementsList,
    },
  };
}
