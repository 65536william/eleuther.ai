import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1>EleutherAI</h1>
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/publications">
          <a>Publications</a>
        </Link>
        <Link href="/datasets">
          <a>Datasets</a>
        </Link>
        <Link href="/models">
          <a>Models</a>
        </Link>
      </nav>
      <style jsx>{`
        header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 150px;
          padding-top: 5vh;
          margin: 0 5vw 5vh;
        }
        h1 {
          font-weight: bold;
          line-height: 1;
          font-size: 2.5rem;
        }
        nav {
          display: flex;
          justify-content: space-between;
        }
        a {
          text-decoration: none;
          color: inherit;
          font-style: normal;
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
          font-size: 0.875rem;
        }
        @media (max-width: 800px) {
          nav {
            display: none;
          }
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </header>
  );
}
