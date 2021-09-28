import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>EleutherAI</h1>
      <nav>
        <Link href="/blog">Blog</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Publications</Link>
        <Link href="/">Datasets</Link>
        <Link href="/">Models</Link>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 5vh 10vw;
        }
        h1 {
          font-family: "Epilogue";
          font-weight: bold;
        }
        nav {
          width: 50%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </header>
  );
}
