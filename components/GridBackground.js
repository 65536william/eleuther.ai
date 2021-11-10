export default function GridBackground() {
  return (
    <div className="grid">
      <div className="columnGrid">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="rowGrid">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <style jsx>{`
        .grid {
          height: 100%;
        }
        .columnGrid,
        .rowGrid {
          width: 100%;
          position: absolute;
          z-index: -10;
          display: grid;
        }
        .columnGrid {
          height: 100%;
          position: fixed;
          grid-template-columns: 5% 1fr 150px 1fr 5%;
        }
        .rowGrid {
          display: none;
          height: max-content;
          grid-template-columns: 1fr;
          grid-template-rows: 10% 90% 100% 100% 50% 50%;
        }
        .column {
          height: 100vh;
          border-left: 1px solid rgba(0, 0, 0, 0.05);
          border-right: 1px solid rgba(0, 0, 0, 0.05);
        }
        .column:first-child {
          border-left: none;
        }
        .column:last-child {
          border-right: none;
        }
        .row {
          border-top: 2px solid rgba(0, 0, 0, 0.05);
        }
        .row:first-child {
          border-top: none;
        }
      `}</style>
    </div>
  );
}
