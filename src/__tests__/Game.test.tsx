import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Game from "../../components/Chessboard/Game";

describe("<Game />", () => {
  test("should display a gameboard", async () => {
    const { queryByTestId } = render(<Game />);
    const squareboard = screen.queryByTestId("squareboard");
    expect(squareboard).toHaveClass("board");
  });

  test("should display 64 tiles", async () => {
    const { container } = render(<Game />);
    const tiles = container.getElementsByClassName('tile');
    expect(tiles.length).toBe(64);
  });

});
