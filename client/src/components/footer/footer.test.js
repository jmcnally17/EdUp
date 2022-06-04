import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import SchoolFooter from "./footer";

afterEach(cleanup);

test("page footer", () => {
  render(<SchoolFooter />);
  expect(screen.getByText("Company Bio")).toBeInTheDocument();
  expect(screen.getByText("Made by")).toBeInTheDocument();
  const link = screen.getByRole("link", { name: "Materialize" });
  expect(link.getAttribute("href")).toBe("http://materializecss.com");
});
