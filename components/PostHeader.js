export default function PostHeader({ title, subtitle, authors }) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <style jsx>{`
        h1 {
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;
        }
        div {
          margin-top: 2.5vh;
        }
      `}</style>
    </div>
  );
}
