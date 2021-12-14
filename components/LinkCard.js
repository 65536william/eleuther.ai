import Link from "next/link";

export default function LinkCard({ slug, text, color }) {
  return (
    <>
      <Link href={slug}>
        <div className="card">
          <div className="title">
            {color && <div className="circle"></div>}
            <span>{text}</span>
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
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
          border: thin solid rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease-in-out;
        }
        .card:hover {
          box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.25);
          transform: scale(1.01);
        }
        .title {
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
        span {
          font-size: 1.25rem;
        }
        @media (max-width: 800px) {
          span {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
