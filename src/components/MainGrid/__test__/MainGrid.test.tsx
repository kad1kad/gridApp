import React from "react";
import { render, screen } from "@testing-library/react";
import MainGrid from "../MainGrid";

jest.mock("../../MainGridCell/Cell", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(null),
}));

describe("Grid Component", () => {
  it("renders Grid component", () => {
    render(<MainGrid columns={2} rows={2} />);
    const grid = screen.getByTestId("mainGrid-container");
    expect(grid).toBeInTheDocument();
  });
});
