import React, { FC } from "react";
import { createRef } from "react";
import useDimensions from "../../hooks/useDimensions";

import "./Cell.scss";

interface CellProps {
  id: number;
}

const Cell: FC<CellProps> = ({ id }) => {
  const divRef = createRef<HTMLDivElement>();
  const dimensions = useDimensions(divRef);

  return (
    <div ref={divRef} className="cell-item">
      <p>{dimensions.width}</p>
      <p>X</p>
      <p>{dimensions.height}</p>
    </div>
  );
};

export default Cell;
