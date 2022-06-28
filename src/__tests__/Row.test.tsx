import React from "react";
import { render, screen, queryByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Row from "../../components/Chessboard/Row";

describe("<Row />", () => {
  test("should display a row of squares", async () => {
    const { queryByTestId } = render(<Row direction="white-first" />);
    const row = screen.queryByTestId("row");

    expect(row).toBeVisible();
  });
});
