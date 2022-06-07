import React from "react";
import Input from "./input";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("Input has a field and button for sending a message", async () => {
  render(<Input />);

  const messageEl = screen.getByLabelText("message");
  expect(messageEl.value).toBe("");
  expect(messageEl.placeholder).toBe("Type a message...");

  const sendButton = screen.getByRole("button", { name: "Send" });
  expect(sendButton).toBeInTheDocument();
});
