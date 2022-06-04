import React from "react";
import Join from "./join";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

xtest("Join", () => {
  render(<Join />);

  // const messageEl = screen.getByLabelText("message");
  // expect(messageEl.value).toBe("");
  // expect(messageEl.placeholder).toBe("Type a message...");
  // // await userEvent.type(messageEl, "testing");
  // // expect(messageEl.value).toBe("testing");

  // const sendButton = screen.getByRole("button", { name: "Send" });
  // expect(sendButton).toBeInTheDocument();
});
