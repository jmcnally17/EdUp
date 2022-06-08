import React from "react";
import Message from "./message";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Message", () => {
  it("renders message details", () => {
    const fakeName = "Test username";
    const fakeMessage = { user: "Test username", text: "Testing text" };
    render(<Message message={fakeMessage} name={fakeName} />);

    expect(screen.getByText("Test username")).toBeInTheDocument();
    expect(screen.getByText("Testing text")).toBeInTheDocument();
  });
});
