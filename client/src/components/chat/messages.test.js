import React from "react";
import Messages from "./messages";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Messages", () => {
  it("renders each individual message", () => {
    const fakeMessages = [
      { user: "admin", text: "Welcome!" },
      { user: "parent", text: "Hello there!" },
    ];
    const fakeName = "parent";
    render(<Messages messages={fakeMessages} name={fakeName} />);

    expect(screen.getByText("admin")).toBeInTheDocument();
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getByText("parent")).toBeInTheDocument();
    expect(screen.getByText("Hello there!")).toBeInTheDocument();
  });
});
