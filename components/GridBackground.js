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
          grid-template-columns: 1fr 1fr;
        }
        .rowGrid {
          width: 100%;
          height: 100vh;
          grid-template-columns: 1fr;
          grid-template-rows: 12.5vh 87.5vh 50vh 50vh 50vh 50vh;
        }
        .column {
          height: 100vh;
          border-left: 2px solid rgba(0, 0, 0, 0.125);
        }
        .column:first-child {
          border-left: none;
        }
        .row {
          border-top: 2px solid rgba(0, 0, 0, 0.125);
        }
        .row:first-child {
          border-top: none;
        }
      `}</style>
    </div>
  );
}
