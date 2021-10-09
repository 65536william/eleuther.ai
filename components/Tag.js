function getDivColor(word) {
  switch (word) {
    case "NLP":
      return "#74b9ff";
    case "GPT-3":
      return "#ff7675";
    case "GPT-Neo":
      return "#a29bfe";
    case "meta":
      return "#636e72";
    default:
      return "black";
  }
}

export default function Tag({ word }) {
  return (
    <div>
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
          font-family: "Epilogue";
        }
      `}</style>
    </div>
  );
}
