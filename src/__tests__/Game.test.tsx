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

});
