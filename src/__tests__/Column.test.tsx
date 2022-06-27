import React from 'react'
import { render, screen, queryByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Column from "../../components/Column";

describe("<Column />", () => {
  test("should display a column of squares", async () => {
    const { queryByTestId } = render(<Column direction="white-first" />);
    const column = screen.queryByTestId("column");

    expect(column).toBeVisible()

  });
});
