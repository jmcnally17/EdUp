import React from "react";
import Payments from "./payments";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("Payments renders an Outstanding Payments header on the page", () => {
  render(<Payments />);
  expect(screen.getByText("Outstanding Payments:")).toBeInTheDocument();
  const link = screen.getByRole("button", { name: /Checkout/i });
  expect(link).toBeInTheDocument();
});
