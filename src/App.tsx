import React, { useState } from "react";
import "./styles/App.scss";
import MainGrid from "./components/MainGrid/MainGrid";
import Sidebar from "./components/Sidebar/Sidebar";

/**
 * App Component
 */
export function App() {
  const [rows, setRows] = useState<number>(2);
  const [columns, setColumns] = useState<number>(2);
  const [isOpen, setIsOpen] = useState(true);

  function getInputValue(numRows: number, numColumns: number) {
    setRows(numRows);
    setColumns(numColumns);
  }

  return (
    <div className="App">
      <Sidebar
        getInputValue={getInputValue}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <MainGrid columns={columns} rows={rows} />
    </div>
  );
}
