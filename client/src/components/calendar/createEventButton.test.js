import React from "react";
import CreateEventButton from "./CreateEventButton";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("renders a create button", () => {
  render(<CreateEventButton />);
  const button = screen.getByRole("button", { name: "Create"})
  expect(button).toBeInTheDocument();
});
