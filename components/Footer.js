export default function Footer() {
  return (
    <footer>
      <div>
        <p>Blog</p>
        <p>Projects</p>
        <p>Publications</p>
        <p>Datasets</p>
        <p>Models</p>
      </div>
      <div>
        <p>About</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div>
        <p>Eleuther AI.</p>
      </div>
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
