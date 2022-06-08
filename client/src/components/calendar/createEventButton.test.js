import React from "react";
import CreateEventButton from "./createEventButton";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Create Event Button", () => {
  it("renders a create button", () => {
    render(<CreateEventButton />);
    const button = screen.getByRole("button", { name: "Create"})
    expect(button).toBeInTheDocument();
  });
});
