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
      <style jsx>{`
        main {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
