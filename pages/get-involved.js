import DiscordHighlight from "../components/DiscordHighlight";
import Layout from "../components/Layout";

export default function GetInvolved() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <p>
            Joining EleutherAI is as simple as joining us on{" "}
            <a href="https://discord.gg/zBGx3azzUn">Discord</a> and picking a
            project to contribute to.
          </p>
          <p>
            As an independent organization, we are dependent upon donations to
            power our compute. If you have a very large quantity of compute or
            compute credits, please contact us directly at
            contact[at]eleuther.ai.
          </p>
          <p>
            Contributors are traditionally expected to have at some experience
            with machine learning and data science. While there is some work for
            people without that skillset, we are a DL research lab and therefore
            most work involves writing, training, and inferencing neural
            networks with industry-standard frameworks.
          </p>
          <p>
            If you would like to inquire about contributing, we welcome you to
            introduce yourself in the{" "}
            <DiscordHighlight bright>#general</DiscordHighlight>
            channel on Discord. Sid Black (
            <DiscordHighlight bright>@Sid</DiscordHighlight>), Leo Gao (
            <DiscordHighlight bright>@bmk</DiscordHighlight>), Stella Biderman (
            <DiscordHighlight bright>@StellaAthena</DiscordHighlight>), and
            Connor Leahy (<DiscordHighlight bright>@Daj</DiscordHighlight>) are
            generally involved with organizing things and can point you towards
            specific resources or answer questions.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 7.5vw 1fr;
        }
        .content {
          grid-column: 1 / 3;
          display: flex;
          flex-direction: column;
          gap: 3vh;
        }
      `}</style>
    </Layout>
  );
}
