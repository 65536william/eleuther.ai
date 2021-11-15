import Link from "next/link";

export default function LinkCard({ slug, text, color }) {
  return (
    <>
      <Link href={slug}>
        <div className="card">
          <div className="title">
            <div className="circle"></div>
            <span>{text}</span>
          </div>
          <p>→</p>
        </div>
      </Link>
      <style jsx>{`
        .card {
          border: 1px solid blue;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
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
      `}</style>
    </>
  );
}
