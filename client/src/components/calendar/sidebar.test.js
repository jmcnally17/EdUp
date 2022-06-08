import React from "react";
import Sidebar from "./sidebar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Sidebar", () => {
  it("renders the sidebar components", () => {
    const fakeUser = {
      admin: true,
    };
    render(<Sidebar user={fakeUser} />);
    const button = screen.getByRole("button", { name: "Create" });
    expect(button).toBeInTheDocument();

    expect(screen.getByText("W")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("W")).toBeInTheDocument();

    const nextMonth = screen.getByRole("button", { name: "chevron_right" });
    expect(nextMonth).toBeInTheDocument();
    const prevMonth = screen.getByRole("button", { name: "chevron_left" });
    expect(prevMonth).toBeInTheDocument();

    const general = screen.getByRole("button", { name: "General" });
    expect(general).toBeInTheDocument();
    const history = screen.getByRole("button", { name: "History" });
    expect(history).toBeInTheDocument();
  });
});
