import Link from "next/link";
import { useRef, useState } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default function Header() {
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const menuContainer = useRef(null);

  function openMenu() {
    setModalMenuOpen(true);
    disableBodyScroll(menuContainer);
  }

  function closeMenu() {
    setModalMenuOpen(false);
    clearAllBodyScrollLocks();
  }

  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1>EleutherAI</h1>
          </a>
        </Link>
      </div>
      <p className="burgerButton" onClick={openMenu}>
        Burger
      </p>
      {modalMenuOpen && (
        <div className="modalMenu" ref={menuContainer}>
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
        </div>
      )}
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
        .burgerButton {
          display: none;
          background-color: orange;
        }
        .modalMenu {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          overflow: hidden;
          z-index: 100;
        }
        @media (max-width: 800px) {
          nav {
            display: none;
          }
          h1 {
            font-size: 2rem;
          }
          .burgerButton {
            display: block;
          }
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .modalMenu {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
          }
        }
      `}</style>
    </header>
  );
}
