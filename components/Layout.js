import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
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
