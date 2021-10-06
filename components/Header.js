import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>EleutherAI</h1>
      <nav>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
        <Link href="/">
          <a>Publications</a>
        </Link>
        <Link href="/">
          <a>Datasets</a>
        </Link>
        <Link href="/">
          <a>Models</a>
        </Link>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 5vh 10vw;
          font-family: "Epilogue";
        }
        h1 {
          font-weight: bold;
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
