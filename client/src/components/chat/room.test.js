import React from "react";
import Chat from "./room";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

xtest("Chat", () => {
  render(<Chat />);
});
