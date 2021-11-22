import Layout from "../components/Layout";
import Link from "next/link";
import DiscordMessage from "../components/DiscordMessage";
import DiscordHighlight from "../components/DiscordHighlight";
import { InlineMath } from "react-katex";
import GenericCitation from "../components/GenericCitation";

export default function FAQ() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h2>General</h2>
          <h3>How did this all start?</h3>
          <p>
            One day, <a href="https://github.com/ConnorJL">Connor Leahy</a>{" "}
            posted in the TPU Podcast Discord:
          </p>
          <DiscordMessage
            date="2020-07-02"
            role="regular"
            avatar="https://cdn.discordapp.com/avatars/157923989262434304/ea2d9c1e1a063d890a948c48ef962c8d.png"
            username="Daj"
          >
            https://arxiv.org/abs/2006.16668 Hey guys lets give OpenAI a run for
            their money like the good ol' days
          </DiscordMessage>
          <p>
            To which <a href="https://github.com/leogao2">Leo Gao</a> replied:
          </p>
          <DiscordMessage
            date="2020-07-02"
            role="regular"
            avatar="https://cdn.discordapp.com/avatars/606987544235868219/89c76c2459fb48c8856ecff4f33d4fd7.png"
            username="bmk"
          >
            <DiscordHighlight>@Daj</DiscordHighlight> this but unironically
          </DiscordMessage>
          <p>And so it began.</p>
          <h3>Where did the name come from?</h3>
          <p>
            In Ancient Greek,{" "}
            <a href="https://en.wikipedia.org/wiki/Eleutheria">eleutheria</a> is
            a word for "liberty", and was used as a proper noun as a
            personification of the concept. This same personage became{" "}
            <a href="https://en.wikipedia.org/wiki/Libertas">Libertas</a> to the
            Romans and{" "}
            <a href="https://en.wikipedia.org/wiki/Statue_of_Liberty">
              Lady Liberty
            </a>{" "}
            to Americans.
          </p>
          <h3>How can I get involved?</h3>
          <p>
            Join our <a href="https://discord.gg/zBGx3azzUn">Discord</a> or
            check us out on <a href="https://github.com/EleutherAI">GitHub</a>!
            We're an open community, so you are free to contribute as you wish.
            However, we expect newcomers either to be fairly knowledgeable or to
            sit on the sidelines until they understand the internal structure
            and culture of our operations. If you are interested, check out our
            page on <Link href="/get-involved">getting involved</Link>.
          </p>
          <h3>Are there any other ways to support EleutherAI?</h3>
          <p>
            Yes. If you or someone you know has access to large quantities of
            CPU, GPU, or TPU resources, send a message to Sid Black{" "}
            <DiscordHighlight bright>@Sid</DiscordHighlight> on{" "}
            <a href="https://discord.gg/zBGx3azzUn">Discord</a> with more
            details.
          </p>
          <h3>So . . . what's the deal with your logo?</h3>
          <p>
            Keeping with the theme, our logotype and all images on this website
            were generated with deep learning techniques.
          </p>
          <h3>Where can I go if I have more questions?</h3>
          <p>
            <a href="https://discord.gg/zBGx3azzUn">Discord</a> is the best
            place for that. Our founding members appear in purple and our core
            contributors appear in blue. They will be able to provide helpful
            guidance or answer questions.
          </p>
          <p>
            However, we ask that you do not expect us to be your tech support;
            those who contribute to EleutherAI do so in their free time and tend
            to prefer contributing to projects rather than debugging your
            problems. We recommend consulting the corresponding documentation
            before asking us for help. If you think you have found a bug, please
            consider opening an issue on{" "}
            <a href="https://github.com/EleutherAI">GitHub</a>.
          </p>
          <h3>
            I'm new to deep learning---How do I get into AI? What is a
            transformer? Tell me how everything works!
          </h3>
          <p>
            We are a research-focused Discord server and not an educational one.
            We welcome beginners to lurk and talk about topics they are
            knowledgeable of, but this is not the place to get intro-level
            resources or answers to basic questions. We have links to several
            excellent beginner-friendly servers on{" "}
            <a href="https://discord.gg/zBGx3azzUn">Discord</a> in the{" "}
            <DiscordHighlight bright>#communities</DiscordHighlight> channel.
          </p>
          <h2>GPT-Neo and GPT-NeoX</h2>
          <h3>What are GPT-Neo and GPT-NeoX?</h3>
          <p>
            <a href="https://github.com/EleutherAI/gpt-neo">GPT-Neo</a> and{" "}
            <a href="https://github.com/EleutherAI/gpt-neox">GPT-NeoX</a> are
            our codebases for training massive language models, for which we
            plan to release under open licenses. The models themselves are
            referred to by their size (in millions or billions of parameters).
          </p>
          <h3>
            How big is the largest publically available model you have trained?
          </h3>
          <p>
            On June 8th, 2021 we released a 6 billion parameter model trained
            upon the Pile, GPT-J-6B.
          </p>
          <h3>
            Are you serious when you say you are going to train a model
            comparable to the biggest GPT-3 (175 billion parameters)?
          </h3>
          <p>
            Yes, that is the plan. We expect our final model to be somewhere
            between 150 and 200 billion parameters.
          </p>
          <h3>
            Have you considered the possible risks of creating models like
            these?
          </h3>
          <p>
            <a href="https://blog.eleuther.ai/why-release-a-large-language-model/">
              Yes, we have considered the risks of creating and releasing such
              models at length, and have come to the conclusion that we believe
              the benefits outweigh the risks.
            </a>
          </p>
          <h3>When do you plan to have more models available?</h3>
          <p>
            As a collective of volunteer researchers and engineers who
            contribute in our free time, we are unable to commit to either a
            timeline or a roadmap for future models.
          </p>
          <h3>How are you training such large models?</h3>
          <p>
            For GPT-Neo, we utilize our limited access to preemptible TPUs
            through the{" "}
            <a href="https://sites.research.google/trc/">
              TPU Research Cloud (TRC)
            </a>
            . For our future models to be trained with GPT-NeoX, we have been
            graciously offered high-performance GPU compute by{" "}
            <a href="https://www.coreweave.com/">CoreWeave</a>. CoreWeave is
            excited by the open nature of the project and is very keen in
            helping us to break the OpenAI-Microsoft monopoly on massive
            autoregressive language models.
          </p>
          <h3>What differentiates GPT-NeoX from GPT-Neo?</h3>
          <p>
            GPT-Neo is a codebase built from the ground up upon{" "}
            <a href="https://github.com/tensorflow/mesh">Mesh Tensorflow</a>,
            designed for training on TPUs.
          </p>
          <p>
            Apart from appending the 24th letter of the ISO basic Latin
            alphabet, GPT-NeoX is an entirely separate, in-development codebase
            based upon Megatron-LM and{" "}
            <a href="https://www.deepspeed.ai/">DeepSpeed</a> and is designed
            for GPUs.
          </p>
          <h3>
            Why do you need GPT-NeoX when you have GPT-Neo? Why maintain two
            codebases?
          </h3>
          <p>
            Our motivation for the development of GPT-NeoX is our access to
            compute resources: It is not realistic for us to use TRC TPUs to
            train models larger than around 20 billion parameters. Although TRC
            can potentially provide enough TPUs to train such large models, the
            compute is unavailable for the time we would need due to the
            pre-empting of instances. Even with a v3-2048, a model between 150
            and 175 billion parameters would require months to train. CoreWeave
            provides us a path to train models at the scales we would like, but
            we need to utilize their GPUs for training instead of TPUs.
          </p>
          <p>
            We, therefore, have two reasons to retire the GPT-Neo codebase in
            favor of developing GPT-NeoX:
          </p>
          <ul>
            <li>
              Mesh TensorFlow handles TPUs and GPUs differently, and code
              designed for use with TPUs has no guarantee to work well on GPUs.
            </li>
            <li>
              It makes sense to build a new codebase to take full advantage of
              GPU hardware---even tiny performance improvements can add up to
              substantial time and resource savings.
            </li>
          </ul>
          <h3>
            What about volunteer-driven distributed computing, like{" "}
            <a href="https://boinc.berkeley.edu/">BOINC</a>,{" "}
            <a href="https://foldingathome.org/">Folding@Home</a>, or{" "}
            <a href="https://github.com/learning-at-home/hivemind">hivemind</a>?
          </h3>
          <p>
            We have considered the possibility of pooling volunteer resources
            for training models, but upon thorough review, we have concluded
            that such approaches are not a viable option today. There are
            numerous problems with current distributed approaches for us:
          </p>
          <ul>
            <li>
              Backpropagation is dense and sensitive to precision, therefore
              requiring high-bandwidth communication.
            </li>
            <li>
              Mixture-of-experts-based models tend to significantly underperform
              monolithic (regular) models for the same number of parameters.
            </li>
            <li>
              Having enough contributors to outweigh the high overhead is
              infeasible.
            </li>
            <li>
              Verifiability and resistance to outside attack are not currently
              possible without significant additional overhead.
            </li>
          </ul>
          <p>
            In short, doing volunteer-driven distributed compute well for this
            use case is an unsolved problem. If you have expertise in this area,
            drop us a line and we will be happy to hear you out.
          </p>
          <h3>
            Have you considered more efficient architectures or methods? Have
            you considered distillation?
          </h3>
          <p>
            Our intention is not to perfectly replicate the architecture used by
            GPT-3 but to instead build models comparable to what OpenAI has
            built. We are committed to exploring the entire space of
            architectures and methods, including various linear-scaling
            attention mechanisms, mixture-of-experts, and other designs.
            However, in our experience, these designs are not always well suited
            to language modeling: Attention mechanisms that scale with linear
            complexity with respect to sequence length are often strictly
            incompatible with the autoregressive objective used for text
            generation; the remaining methods have faired poorly in our testing.
            Engineering is full of trade-offs, and silver-bullet research
            breakthroughs are uncommon occurences.{" "}
            <a>
              If and when new methodologies surpass what we have already, we
              will integrate and use them.
            </a>
          </p>
          <p>
            Our agreement with CoreWeave includes a stipulation that we attempt
            distillation on the final model to make it easier to deploy. It is
            unknown if distillation is advantageous at these scales, but we
            intend to find out.
          </p>
          <h3>Will I be able to run models on my computer locally, offline?</h3>
          <p>The answer is highly dependent on hardware and configuration.</p>
          <p>
            No, you will not be able to run a model the size of full-scale GPT-3
            on your first-generation Macbook Air. 175 billion parameters at
            single-precision (binary32) take up 700 Gigabytes, and realistically
            the entire model needs to be loaded into memory for inference. It is
            unlikely that consumer hardware will be able to run anything of that
            scale for years to come, even on CPU. To run large models beyond a
            few billion parameters there is an expectation to utilize systems
            with large amounts of compute and memory.
          </p>
          <p>
            Smaller models can be run on more pedestrian hardware: 125 million
            parameters take up only 500 Megabytes and should run on a basic
            laptop without a hitch, while 1.3 billion parameters take up 5
            Gigabytes and should run on capable personal computers without
            issue.
          </p>
          <p>
            If you are interested in inferencing and fine-tuning models, we
            highly recommend using{" "}
            <a href="https://huggingface.co/transformers/model_doc/gpt_neo.html">
              the implementation in Hugging Face Transformers
            </a>
            , which is often far easier to both install and use than our
            research code. We do not support or maintain the Hugging Face
            implementation beyond{" "}
            <a href="https://huggingface.co/eleutherai">
              our organization in Model Hub
            </a>
            , and issues with Transformers or its usage should be directed
            elsewhere such as the{" "}
            <a href="https://discuss.huggingface.co/">
              Hugging Face community forums
            </a>
            .
          </p>
          <h3>Are the codebases free software?</h3>
          <p>
            GPT-Neo is MIT-licensed, while GPT-NeoX is licensed under Apache
            2.0. These are the most freely-termed licenses that we can provide
            for each codebase respectively.
          </p>
          <h3>Are the models free software?</h3>
          <p>
            EleutherAI is licensing models under Apache 2.0. If you use our
            models, we would highly appreciate you citing or displaying your
            usage of them.
          </p>
          <h3>How should I cite your models?</h3>
          <p>
            We ask that you cite both the codebase and the dataset together when
            citing models. Our recommended citation method is as follows.
          </p>
          _In the document body:_
          <InlineMath math="X.XB GPT-Neo \citep{gpt-neo} model trained on the Pile \citep{pile}" />
          {/* citation information is wrong, TODO fix */}
          {/* <GenericCitation
          data={{
            data: {
              frontmatter: {
                title:
                  "The Pile: An 800GB Dataset of Diverse Text for Language Modeling",
              },
              authors: [
                "Leo Gao",
                "Stella Biderman",
                "Sid Black",
                "Laurence Golding",
                "Travis Hoppe",
                "Charles Foster",
                "Jason Phang",
                "Horace He",
                "Anish Thite",
                "Noa Nabeshima",
                "Shawn Presser",
                "Connor Leahy",
              ],
            },
          }}
        /> */}
          <h2>The Pile</h2>
          <h3>What is the Pile? What is in it?</h3>
          <p>
            The Pile is a 825 GiB diverse, open source language modeling data
            set that consists of 22 smaller, high-quality datasets combined
            together. For more information, please read the{" "}
            <a href="https://arxiv.org/abs/2101.00027">paper</a>.
          </p>
          <h3>Who can use the Pile?</h3>
          <p>
            The Pile was primarily designed for researchers training large-scale
            language models. It also may be of interest to other researchers
            interested in topics such as bias, online discourse, and text
            compression.
          </p>
          <h3>Where can I get the Pile?</h3>
          <p>
            <a href="https://the-eye.eu/public/AI/pile/">
              The data can be downloaded here
            </a>
            .
          </p>
          <h3>Can I add something to the Pile?</h3>
          <p>
            Pile v1 is finalized and is no longer accepting contributions. All
            contributions for a Pile v2 should be sent to the{" "}
            <a href="https://github.com/EleutherAI/the-pile/tree/version2">
              `version2` branch
            </a>
            .
          </p>
          <h3>Have you considered adding Discord logs?</h3>
          <p>
            Yes. We decided against it, as there are good privacy reasons
            Discord users may not expect or want their conversations unwittingly
            added to a public dataset like this. Collecting such a dataset would
            most likely also violate{" "}
            <a href="https://discord.com/terms">Discord's ToS</a>. In general,
            more trouble than they're worth.
          </p>
          <h3>Can I make my own version of the Pile?</h3>
          <p>
            Of course! For just this reason, all of the components and the Pile
            creation process are reproducible.{" "}
            <a href="https://github.com/EleutherAI/the-pile">
              The code used to create the Pile can be found here.
            </a>{" "}
            Links to the code for reproducing each component are also available
            at that repo.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 150px 1fr;
        }
        .content {
          grid-column: 1 / 3;
        }
      `}</style>
    </Layout>
  );
}
