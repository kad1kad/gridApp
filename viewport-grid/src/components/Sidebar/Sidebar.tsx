import React, { FC, createRef } from "react";
import "./Sidebar.scss";
import Burger from "../../icons/Burger";

interface SidebarProps {
  getInputValue: (numRows: number, numColumns: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ getInputValue, isOpen, setIsOpen }) => {
  const toggleSidebar = () => setIsOpen(!isOpen);

  const rows = createRef<HTMLInputElement>();
  const columns = createRef<HTMLInputElement>();

  function updateValidValue() {
    const rowsInputValue = Number(rows.current?.value);
    const columnsInputValue = Number(columns.current?.value);

    // Only pass values between 1 and 10 to prevent empty grid when user deletes value.
    if (
      rowsInputValue >= 1 &&
      rowsInputValue <= 10 &&
      columnsInputValue >= 1 &&
      columnsInputValue <= 10
    ) {
      getInputValue(rowsInputValue, columnsInputValue);
    }
  }

  return (
    <div style={{ width: isOpen ? "250px" : "15px" }} className="sidebar">
      <Burger onClick={toggleSidebar} />
      <div
        className="input-wrapper"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <label>
          Rows <span>Maximum 10</span>
        </label>

        <input
          ref={rows}
          name="rows"
          type="number"
          min="1"
          max="10"
          defaultValue={2}
          onChange={updateValidValue}
          aria-labelledby="rowsLabel"
        />

        <label id="columnsLabel">
          Columns <span>Maximum 10</span>
        </label>

        <input
          ref={columns}
          name="columns"
          type="number"
          min="1"
          max="10"
          defaultValue={2}
          onChange={updateValidValue}
          aria-labelledby="columnsLabel"
        />
      </div>
    </div>
  );
};

export default Sidebar;
