import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const menuContainer = useRef(null);
  const router = useRouter();

  function openMenu() {
    setModalMenuOpen(true);
    disableBodyScroll(menuContainer);
  }

  function closeMenu() {
    setModalMenuOpen(false);
    clearAllBodyScrollLocks();
  }

  useEffect(() => {
    router.events.on("routeChangeStart", clearAllBodyScrollLocks);
    return () => router.events.off("routeChangeStart", clearAllBodyScrollLocks);
  }, [router.events]);

  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1 className="title">EleutherAI</h1>
          </a>
        </Link>
      </div>
      <p className="burgerButton" onClick={openMenu}>
        ▲
      </p>
      {modalMenuOpen && (
        <div className="modalMenu" ref={menuContainer}>
          <div className="exitDiv" onClick={closeMenu}>
            <span className="xSpan">▼</span>
          </div>
          <div className="linkLine">
            <Link href="/blog">
              <a style={{ borderBottom: "medium solid var(--red)" }}>Blog</a>
            </Link>
            <Link href="/projects">
              <a style={{ borderBottom: "medium solid var(--yellow)" }}>
                Projects
              </a>
            </Link>
            <Link href="/publications">
              <a style={{ borderBottom: "medium solid var(--green)" }}>
                Publications
              </a>
            </Link>
            <Link href="/datasets">
              <a style={{ borderBottom: "medium solid var(--blue)" }}>
                Datasets
              </a>
            </Link>
            <Link href="/models">
              <a style={{ borderBottom: "medium solid var(--purple)" }}>
                Models
              </a>
            </Link>
          </div>
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
          gap: 7.5vw;
          padding-top: 5vh;
          margin: 0 5vw 2.5vh;
          align-items: center;
        }
        nav {
          display: flex;
          justify-content: space-between;
        }
        a {
          text-decoration: none;
          color: inherit;
          font-style: normal;
          font-size: 0.875rem;
        }
        .burgerButton {
          display: none;
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
        .exitDiv {
          align-self: flex-end;
          padding: 2rem;
        }
        .xSpan {
        }
        @media (max-width: 875px) {
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
          }
          .linkLine {
            display: flex;
            flex-direction: column;
            margin: 2rem;
            gap: 2rem;
          }
          .modalMenu a {
            font-size: 2rem;
            padding-bottom: 0.25rem;
          }
        }
      `}</style>
    </header>
  );
}
