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
          height: 10vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 5vw;
        }
        h1 {
          font-weight: bold;
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
          font-style: normal;
          line-height: 1;
        }
        nav {
          width: 50%;
          display: flex;
          justify-content: space-between;
        }
        a {
          text-decoration: none;
          color: inherit;
          font-size: 1.25rem;
          font-style: normal;
        }
      `}</style>
    </header>
  );
}
