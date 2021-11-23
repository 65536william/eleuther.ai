function getDivColor(word) {
  switch (word) {
    case "Language Modeling":
      return "var(--red-dark)";
    case "Activation Functions":
      return "var(--yellow-dark)";
    case "GPT-Neo":
      return "var(--green-dark)";
    case "GPT-3":
      return "var(--blue-dark)";
    case "Rotary Embeddings":
      return "var(--purple-dark)";
    default:
      return "black";
  }
}

export default function Tag({ word, clickFunction, bold }) {
  function handleClick(word) {
    if (clickFunction) {
      clickFunction(word);
    }
  }

  return (
    <div onClick={() => handleClick(word)}>
      <span>{word}</span>
      <style jsx>{`
        div {
          border: ${bold ? `thin solid ${getDivColor(word)}` : "none"};
          display: inline-block;
          width: max-content;
          padding: 0.125rem 0.25rem 0.25rem;
          border-radius: 0.25rem;
        }
        span {
          font-size: 0.75rem;
          color: ${bold ? getDivColor(word) : "black"};
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
