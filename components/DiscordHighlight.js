export default function DiscordHighlight({ children, bright }) {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          border-radius: 0.5rem;
          font-family: "Epilogue", sans-serif;
          font-size: 1rem;
          font-weight: bold;
          display: inline;
          color: ${bright ? "#505cdc" : "#dee0fc"};
          background-color: ${bright
            ? "hsla(235, 85.6%, 64.7%, 0.15)"
            : "hsla(235,85.6%,64.7%,.3)"};
          padding: 0.5%;
        }
      `}</style>
    </span>
  );
}
