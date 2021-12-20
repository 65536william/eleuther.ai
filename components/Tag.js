function getDivColor(word) {
  switch (word) {
    case "Large Language Models":
      return "var(--red)";
    case "Multimodal Modeling":
      return "var(--yellow)";
    case "AI Alignment and Interpretability":
      return "var(--green)";
    case "Biological ML":
      return "var(--blue)";
    case "AI-Assisted Design and Computational Creativity":
      return "var(--purple)";
    default:
      return "var(--black)";
  }
}

export default function Tag({ word, clickFunction, bold }) {
  function handleClick(word) {
    if (clickFunction) {
      clickFunction(word);
    }
  }

  return (
    <div className="tag" onClick={() => handleClick(word)}>
      <span className="word">{word}</span>
      <style jsx>{`
        .tag {
          border: ${bold ? `thin solid ${getDivColor(word)}` : "none"};
          display: inline-block;
          width: max-content;
          padding: 0.25rem;
        }
        .word {
          font-size: 0.75rem;
          color: ${bold ? getDivColor(word) : "black"};
        }
        @media (max-width: 875px) {
          .word {
            font-size: 0.625rem;
          }
          .tag {
            padding: 0.125rem;
          }
        }
      `}</style>
    </div>
  );
}
