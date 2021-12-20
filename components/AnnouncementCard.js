import dayjs from "dayjs";
import Link from "next/link";

export default function AnnouncementCard({ title, date, content, link }) {
  return (
    <div className="card">
      <div className="head">
        <h4>{title}</h4>
        <span className="date">{dayjs(Number(date)).format("D MMMM, YY")}</span>
      </div>
      <p>{content}</p>
      <Link href={link} passHref>
        <a className="announcementLink">View more →</a>
      </Link>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          gap: 1vh;
          padding: 0 1.25vw;
        }
        .head {
          display: flex;
          gap: 1vh;
          align-items: center;
        }
        .date {
          font-size: 0.875rem;
        }
        @media (max-width: 875px) {
          .date {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
