import React, { FC } from "react";
import "./MainGrid.scss";
import Cell from "../MainGridCell/Cell";

interface MainGridProps {
  columns: number;
  rows: number;
}

const MainGrid: FC<MainGridProps> = ({ columns, rows }) => {
  const numCells = columns * rows;
  const cells: JSX.Element[] = [];

  // Displays cells based on the updated state of columns and rows.
  for (let i = 1; i <= numCells; i++) {
    const cell = <Cell key={i} id={i} />;
    cells.push(cell);
  }

  // Adjust grid styling based on number of columns and rows.
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div
      className="container"
      style={gridStyle}
      data-testid="mainGrid-container"
    >
      {cells}
    </div>
  );
};

export default MainGrid;
