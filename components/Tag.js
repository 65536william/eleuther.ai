function getDivColor(word) {
  switch (word) {
    case "Language Modeling":
      return "#74b9ff";
    case "GPT-3":
      return "#ff7675";
    case "GPT-Neo":
      return "#a29bfe";
    case "meta":
      return "#636e72";
    case "Bio ML":
      return "#fd79a8";
    default:
      return "black";
  }
}

export default function Tag({ word, clickFunction }) {
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
          background-color: ${getDivColor(word)};
          display: inline-block;
          width: max-content;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
        }
        span {
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
