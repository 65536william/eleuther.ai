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
    color: "var(--red)",
  },
  {
    name: "Projects",
    slug: "blog",
    color: "var(--yellow)",
  },
  {
    name: "Publications",
    slug: "blog",
    color: "var(--green)",
  },
  {
    name: "Datasets",
    slug: "blog",
    color: "var(--blue)",
  },
  {
    name: "Models",
    slug: "blog",
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
          <h2>
            A grassroots collective of researchers working to open source AI
            research.
          </h2>
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
          <div>
            <h3>Announcements</h3>
            <div className="announcementsStack">
              {announcementsList.map((announcement) => (
                <div className="announcement">
                  <div className="announcementMeta">
                    <p className="announcementTitle">
                      {announcement.data.title}
                    </p>
                    <p className="announcementDate">
                      {dayjs(Number(announcement.data.date)).format(
                        "D MMMM, YYYY"
                      )}
                    </p>
                  </div>
                  <p className="announcementContent">
                    {announcement.content}{" "}
                    <Link href={announcement.data.link} passHref>
                      <a className="announcementLink">View more →</a>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 150px;
          }
          .column {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .sitemapStack {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .linksStack {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .announcementsStack {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .announcementMeta {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .announcementTitle {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
              segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
              sans-serif;
            font-size: 1.125rem;
          }
          .announcementDate {
            font-size: 0.75rem;
          }
          .announcementContent {
            margin: 0 0 0.5rem;
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
    .slice(0, 5);
  return {
    props: {
      announcementsList,
    },
  };
}
