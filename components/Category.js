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

export default function Category({ word, clickFunction, bold }) {
  function handleClick(word) {
    if (clickFunction) {
      clickFunction(word);
    }
  }

  return (
    <div onClick={() => handleClick(word)}>
      <span>{word}</span>
      <style jsx>{`
        span {
          color: ${bold ? getTextColor(word) : "none"};
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
