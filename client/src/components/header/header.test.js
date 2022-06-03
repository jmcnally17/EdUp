import React from "react";
import Header from "./header";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("header has the name", () => {
  render(<Header />);
  expect(screen.getByText(/Logo/i)).toBeInTheDocument();
});
