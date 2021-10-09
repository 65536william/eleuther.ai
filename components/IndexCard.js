import { forwardRef } from "react";

const IndexCard = forwardRef(({ onClick, href, children }, ref) => {
  return (
    <div href={href} onClick={onClick} ref={ref} className="card">
      {children}
      <style jsx>{`
        .card {
          border-radius: 0.25rem;
          box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.05);
          height: max-content;
          cursor: pointer;
        }
        .card:hover {
          box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
});

export default IndexCard;
