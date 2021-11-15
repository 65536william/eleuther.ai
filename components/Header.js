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
          margin: 0 5vw 5vh;
        }
        h1 {
          font-weight: bold;
          line-height: 1;
          font-size: 2.5rem;
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
