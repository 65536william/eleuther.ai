export default function PostHeader({ title, subtitle, authors }) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      <style jsx>{`
        div {
          margin: 2.5vh 0;
        }
        .subtitle {
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}
