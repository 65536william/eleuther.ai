import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>EleutherAI</h1>
      </Link>
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 5vh 10vw;
        }
        h1 {
          font-weight: bold;
          font-family: "Epilogue";
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
        }
      `}</style>
    </header>
  );
}
