import React from "react";
import Sidenav from "./navbar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Navbar has links to each page", () => {
  render(<Sidenav />);
  const linkOne = screen.getByRole("link", { name: "Noticeboard" });
  expect(linkOne.getAttribute("href")).toBe("/noticeboard");
});
