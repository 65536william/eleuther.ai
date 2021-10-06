export default function IndexWrapper({ title, children }) {
  return (
    <div className="index">
      <h2>{title}</h2>
      {children}
      <style jsx>{`
        .index {
          margin: 0 10vw;
        }
        h2 {
          font-family: "Epilogue";
        }
      `}</style>
    </div>
  );
}
