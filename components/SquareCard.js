import Link from "next/link";

export default function SquareCard({ slug, text, bgColor }) {
  return (
    <>
      <Link href={slug}>
        <div className="square">
          <span>{text}</span>
        </div>
      </Link>
      <style jsx>{`
        .square {
          height: 15rem;
          background-color: ${bgColor};
          display: flex;
          align-items: flex-end;
        }
        span {
          color: white;
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
}
