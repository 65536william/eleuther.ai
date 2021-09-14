import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <div className="container">
        <h1>EleutherAI</h1>
        <h2>
          A grassroots collective of researchers working to open source AI
          research.
        </h2>
        <style jsx>{`
          .container {
            margin: 0 10vw;
          }
          h1 {
            font-family: "Epilogue";
            font-weight: bold;
            font-size: 2.5rem;
          }
          h2 {
            font-family: "Epilogue";
            font-size: 1.25rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}
