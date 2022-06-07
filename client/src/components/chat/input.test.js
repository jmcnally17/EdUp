import React from "react";
import Input from "./input";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Input", () => {
  it("Input has a field and button for sending a message", async () => {
    const fakeSetMessage = (value) => {
      return;
    }

    render(<Input setMessage={fakeSetMessage} />);
  
    const messageEl = screen.getByLabelText("message");
    expect(messageEl.value).toBe("");
    expect(messageEl.placeholder).toBe("Type a message...");
    await userEvent.type(messageEl, "testing");
    expect(messageEl.value).toBe("testing");
  
    const sendButton = screen.getByRole("button", { name: "Send send" });
    expect(sendButton).toBeInTheDocument();
  });
});

