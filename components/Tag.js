function getDivColor(word) {
  switch (word) {
    case "Large Language Models":
      return "#4a69bd";
    case "AI-Assisted Design":
      return "#ff7675";
    case "GPT-Neo":
      return "#a29bfe";
    case "Meta":
      return "#636e72";
    case "Biological ML":
      return "#b71540";
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
          background-color: ${bold ? getDivColor(word) : "none"};
          display: inline-block;
          width: max-content;
          padding: 0.25rem 0.5rem;
        }
        span {
          color: ${bold ? "white" : "black"};
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
