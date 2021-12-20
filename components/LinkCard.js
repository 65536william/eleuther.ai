import Link from "next/link";

export default function LinkCard({ slug, text, color }) {
  return (
    <>
      <Link href={slug} passHref>
        <div className="card">
          <div className="head">
            {color && <div className="circle"></div>}
            <span className="title">{text}</span>
          </div>
          <p>→</p>
        </div>
      </Link>
      <style jsx>{`
        .card {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2vh 1.25vw;
          cursor: pointer;
          border: thin solid rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease-in-out;
        }
        .card:hover {
          box-shadow: 0 0.5vw 1vw 0 rgba(0, 0, 0, 0.25);
          transform: scale(1.01);
        }
        .head {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .circle {
          background-color: ${color};
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        .title {
          font-size: 1.25rem;
        }
        @media (max-width: 875px) {
          .title {
            font-size: 1rem;
          }
          .head {
            gap: 0.75rem;
          }
          .circle {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
