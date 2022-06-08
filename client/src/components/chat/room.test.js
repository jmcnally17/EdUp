import React from "react";
import Chat from "./room";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Chat", () => {
  it("renders the child chat components", () => {
    render(<Chat />);
    expect(screen.getByText("People Currently Chatting:")).toBeInTheDocument();
    const input = screen.getByLabelText("message");
    expect(input.value).toBe("");
    expect(input.placeholder).toBe("Type a message...");
  });
});
