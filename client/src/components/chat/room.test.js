import React from "react";
import Chat from "./room";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// afterEach(cleanup);

describe("Chat", () => {
  afterEach(() => {
    cleanup();
  })

  it("renders the child chat components", async () => {
    render(<Chat />);
    expect(screen.getByText("People Currently Chatting:")).toBeInTheDocument();
    const input = screen.getByLabelText("message");
    expect(input.value).toBe("");
    expect(input.placeholder).toBe("Type a message...");
    await userEvent.type(input, "Testing input");
    expect(input.value).toBe("Testing input");
  });
});
