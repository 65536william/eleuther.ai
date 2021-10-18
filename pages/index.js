import Layout from "../components/Layout";
import DiscordMessage from "../components/DiscordMessage";
import DiscordHighlight from "../components/DiscordHighlight";

export default function Index() {
  return (
    <Layout>
      <div className="container">
        <h2>
          A grassroots collective of researchers working to open source AI
          research.
        </h2>
        <hr />
        <p>
          EleutherAI (/iˈluθər eɪ. aɪ/) is a decentralized grassroots collective
          of volunteer researchers, engineers, and developers focused on AI
          alignment, scaling, and open source AI research. Founded in July of
          2020, our flagship project is the GPT-Neo family of models designed to
          replicate those developed by OpenAI as GPT-3. Our Discord server is
          open and welcomes contributors.
        </p>
        <hr />
        <style jsx>{`
          h1 {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
              segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
              sans-serif;

            font-weight: bold;
            font-size: 2.5rem;
          }
          h2 {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
              segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
              sans-serif;

            font-size: 1.25rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}
