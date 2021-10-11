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
          position: fixed;
          z-index: -10;
          height: 100vh;
          width: 100vw;
          display: grid;
        }
        .columnGrid {
          grid-template-columns: 15vw repeat(6, 1fr) 15vw;
        }
        .rowGrid {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(8, 1fr);
        }
        .column {
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
