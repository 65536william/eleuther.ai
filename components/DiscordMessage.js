import Image from "next/image";

function getDiscordColor(role) {
  switch (role) {
    case "regular":
      return "#1f8b4c";
    case "05":
      return "#843da4";
    case "level5":
      return "#3498db";
    case "mathemagician":
      return "#2ecc71";
    case "art":
      return "#e91e63";
    default:
      return "white";
  }
}

export default function DiscordMessage({
  username,
  role,
  date,
  avatar,
  children,
}) {
  return (
    <div className="message">
      <div className="avatar">
        <Image src={avatar} layout="fill" />
      </div>
      <div>
        <div className="messageHeader">
          <span className="username">{username}</span>
          <span className="date">{date}</span>
        </div>
        <p className="text">{children}</p>
      </div>
      <style jsx>{`
        .message {
          background-color: #36393f;
          color: #dcddde;
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
            sans-serif;

          display: grid;
          grid-template-columns: 2.5rem 1fr;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
        }
        .avatar {
          position: relative;
          height: 2.5rem;
          border-radius: 50%;
        }
        .username {
          color: ${getDiscordColor(role)};
        }
        .date {
          color: #72767d;
          font-size: 0.75rem;
          font-weight: bold;
        }
        .messageHeader {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .text {
          line-height: 10;
        }
      `}</style>
    </div>
  );
}
