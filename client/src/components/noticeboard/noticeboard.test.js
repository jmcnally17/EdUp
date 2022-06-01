import React from "react";
import "@testing-library/jest-dom";
import Noticeboard from "./noticeboard";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("renders a form on the page", () => {
  render(<Noticeboard />);
  expect(screen.getByText(/School Notice Board/i)).toBeInTheDocument();
  const link = screen.getByRole("link", { name: /Add New Notice/i });
  expect(link.getAttribute("href")).toBe("/noticeboard/new");
});
