import React from "react";
import Label from "./label";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Label has department buttons", () => {
  render(<Label />);
  const generalButton = screen.getByRole("button", { name: "General" });
  expect(generalButton).toBeInTheDocument();
  const mathsButton = screen.getByRole("button", { name: "Maths" });
  expect(mathsButton).toBeInTheDocument();
  const sportsButton = screen.getByRole("button", { name: "Sports" });
  expect(sportsButton).toBeInTheDocument();
  const languagesButton = screen.getByRole("button", { name: "Languages" });
  expect(languagesButton).toBeInTheDocument();
  const historyButton = screen.getByRole("button", { name: "History" });
  expect(historyButton).toBeInTheDocument();
  const geographyButton = screen.getByRole("button", { name: "Geography" });
  expect(geographyButton).toBeInTheDocument();
});
