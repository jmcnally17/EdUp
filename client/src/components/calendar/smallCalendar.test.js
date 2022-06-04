import React from "react";
import SmallCalendar from "./smallCalendar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Small Calendar has days of the month", () => {
  render(<SmallCalendar />);
  const OneButton = screen.getByRole("button", { name: "1" });
  expect(OneButton).toBeInTheDocument();
  const twelveButton = screen.getByRole("button", { name: "12" });
  expect(twelveButton).toBeInTheDocument();
  const twentyFourButton = screen.getByRole("button", { name: "24" });
  expect(twentyFourButton).toBeInTheDocument();
});

test("Small Calendar has buttons to flick through months", () => {
  render(<SmallCalendar />);
  const leftButton = screen.getByRole("button", { name: "chevron_left" });
  expect(leftButton).toBeInTheDocument();
  const rightButton = screen.getByRole("button", { name: "chevron_right" });
  expect(rightButton).toBeInTheDocument();
});
