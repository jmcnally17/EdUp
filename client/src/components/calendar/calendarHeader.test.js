import React from "react";
import CalendarHeader from "./calendarHeader";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Header has the title Calendar", () => {
  render(<CalendarHeader />);
  expect(screen.getByText("Calendar")).toBeInTheDocument();
});
