import React from "react";
import { render, screen, queryByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {fibonacci, listFibonacci} from "../../helpers/helpers"

describe("<FibonacciModule /> functions", () => {
  it("test a fibonacci sequence", () => {
    expect(listFibonacci(5)).toStrictEqual([0, 1, 1, 2, 3, 5]);
  });
});
