import React from "react";
import Join from "./join";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Join", () => {
  it("shows a list of chat rooms", () => {
    const fakeUser = {
      username: "Test"
    }
    render(<Join user={fakeUser} />);

    expect(screen.getByText("Join a chat room")).toBeInTheDocument();
    expect(screen.getAllByRole("option").length).toBe(10)
    expect(screen.getByRole('link', { name: "Sign in" })).toBeInTheDocument();

  });
});
