import React from "react";
import Noticeboard from "./noticeboard";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("renders the school notice board", () => {
  render(<Noticeboard />);
  expect(screen.getByText(/School Notice Board/i)).toBeInTheDocument();
});

test("has a link to make a new notice", () => {
  render(<Noticeboard />);
  const link = screen.getByRole("link", { name: /Add New Notice/i });
  expect(link.getAttribute("href")).toBe("/noticeboard/new");
});
