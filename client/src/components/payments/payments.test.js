import React from "react";
import "@testing-library/jest-dom";
import Payments from "./payments";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("renders a Outstanding Payments header on the page", () => {
  render(<Payments />);
  expect(screen.getByText("Outstanding Payments:")).toBeInTheDocument();
  const link = screen.getByRole("button", { name: /Checkout/i });
  expect(link).toBeInTheDocument();
});
