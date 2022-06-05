import React from "react";
import Calendar from "./Calendar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("initalizes with a calendar", () => {
  render(<Calendar />);
  expect(screen.getByText("Calendar")).toBeInTheDocument();
  expect(screen.getByText("General")).toBeInTheDocument();
  expect(screen.getByText("Today")).toBeInTheDocument();
  expect(screen.getByText("MON")).toBeInTheDocument();
  expect(screen.getByText("Create")).toBeInTheDocument();
});