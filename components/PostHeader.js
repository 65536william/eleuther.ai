export default function PostHeader({ title, subtitle, authors }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          gap: 1.5vh;
        }
        .subtitle {
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}
