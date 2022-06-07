import React from "react";
import Calendar from "./calendar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Calendar", () => {
  it("renders each component", () => {
    const fakeUser = {
      admin: true
    }
    render(<Calendar user={fakeUser}/>);
    expect(screen.getByText("Calendar")).toBeInTheDocument();
    expect(screen.getByText("General")).toBeInTheDocument();
    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("MON")).toBeInTheDocument();
    expect(screen.getByText("Create")).toBeInTheDocument();
  });
})

