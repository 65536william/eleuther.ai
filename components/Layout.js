import Header from "./Header";
import Footer from "./Footer";
import GridBackground from "./GridBackground";

export default function Layout({ children }) {
  return (
    <>
      <GridBackground />
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>{`
        main {
          margin: 0 5vw;
          min-height: 100vh;
        }

        body {
          font-family: Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        }

        h1 {
          font-size: 2.25rem;
          font-weight: 600;
        }

        h2 {
          font-size: 1.75rem;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        h4 {
          font-size: 1.25rem;
        }

        table {
          font-size: 1rem;
          border-style: hidden;
          background-color: white;
          width: 100%;
        }

        th,
        td {
          text-align: center;
          border: thin solid rgba(0, 0, 0, 0.125);
        }

        tbody tr:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        a {
          font-style: italic;
          text-decoration: underline;
          color: #16a085;
        }

        a:hover {
          color: rgba(0, 0, 0, 0.5);
        }

        p {
          margin: 1vh 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        br {
          margin: 10vh 0;
        }

        blockquote {
          margin-left: 2.5vw;
        }

        ul {
          list-style-type: circle;
        }

        ol {
          list-style-type: decimal;
        }

        ul li,
        ol li {
          margin: 2.5vh 0;
          font-size: inherit;
          line-height: 1.5rem;
        }

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
            line-height: 1.5;
          }
          h2 {
            font-size: 1.25rem;
            line-height: 1.25;
          }
          h3 {
            font-size: 1.125rem;
            line-height: 1.125;
          }
          p {
            font-size: 0.75;
            line-height: 1.25;
          }
        }

        :root {
          --red: #e74c3c;
          --red-dark: #c0392b;
          --yellow: #f1c40f;
          --yellow-dark: #f39c12;
          --green: #2ecc71;
          --green-dark: #27ae60;
          --blue: #3498db;
          --blue-dark: #2980b9;
          --purple: #9b59b6;
          --purple-dark: #8e44ad;
          --orange: #e67e22;
          --orange-dark: #d35400;
          --gray: #95a5a6;
          --gray-dark: #7f8c8d;
          --black: #34495e;
          --black-dark: #2c3e50;
          --teal: #1abc9c;
          --teal-dark: #16a085;
        }
      `}</style>
    </>
  );
}
