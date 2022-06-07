import React from "react";
import CalendarHeader from "./calendarHeader";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Calendar Header", () => {
  it("has the buttons to navigate between months", () => {
    render(<CalendarHeader />);
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  
    const reset = screen.getByRole('button', {name: "Today"});
    expect(reset).toBeInTheDocument();
  
    const nextMonth = screen.getByRole('button', {name: "chevron_right"});
    expect(nextMonth).toBeInTheDocument();
  
    const prevMonth = screen.getByRole('button', {name: "chevron_left"});
    expect(prevMonth).toBeInTheDocument();
  });
})

