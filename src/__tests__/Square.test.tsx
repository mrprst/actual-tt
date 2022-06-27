import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Square from "../../components/Chessboard/Square";

describe("<Square />", () => {
  test("should display a square with 50px height and 50px width", async () => {
    const { queryByTestId } = render(<Square color="white" />);
    const square = screen.queryByTestId("square");

    expect(square).toHaveStyle(`
    height: 50px;
    width: 50px;
    `);
  });

  test("should display a square with color in props", async () => {
    const { queryByTestId } = render(<Square color="white" />);
    const square = screen.queryByTestId("square");

    expect(square).toHaveStyle(`
    background-color: white;
    `);
  });
});
