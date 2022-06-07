import React from "react";
import Input from "./input";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Input", () => {
  it("has a field and button for sending a message", () => {
    const fakeSetMessage = (value) => {
      return;
    }

    render(<Input setMessage={fakeSetMessage} />);
  
    const messageEl = screen.getByLabelText("message");
    expect(messageEl.value).toBe("");
    expect(messageEl.placeholder).toBe("Type a message...");
  
    const sendButton = screen.getByRole("button", { name: "Send send" });
    expect(sendButton).toBeInTheDocument();
  });
});

