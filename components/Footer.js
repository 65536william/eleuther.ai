export default function Footer() {
  return (
    <footer>
      <div>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
      </div>
      <div>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
      </div>
      <div>Eleuther AI.</div>
      <style jsx>{`
        footer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin: 0 10vw;
        }
      `}</style>
    </footer>
  );
}
