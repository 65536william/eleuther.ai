function getTextColor(word) {
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

export default function Category({ word, clickFunction, muted }) {
  function handleClick(word, muted) {
    if (clickFunction) {
      clickFunction(word, muted);
    }
  }

  return (
    <div onClick={() => handleClick(word, muted)}>
      <span>{word}</span>
      <style jsx>{`
        span {
          color: ${muted ? "var(--gray)" : getTextColor(word)};
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
          padding-bottom: 4px;
          border-bottom: medium solid ${getTextColor(word)};
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
