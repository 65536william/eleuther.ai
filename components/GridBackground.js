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
        .columnGrid,
        .rowGrid {
          position: absolute;
          z-index: -10;
          display: grid;
        }
        .columnGrid {
          width: 100%;
          height: max-content;
          grid-template-columns: 5% 30% 30% 30% 5%;
        }
        .rowGrid {
          width: 100%;
          height: max-content;
          grid-template-columns: 1fr;
          grid-template-rows: 10% 90% 50% 50% 50% 50%;
        }
        .column {
          height: 100vh;
          border-left: 2px solid rgba(0, 0, 0, 0.05);
        }
        .column:first-child {
          border-left: none;
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
