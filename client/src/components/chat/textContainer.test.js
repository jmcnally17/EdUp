import React from "react";
import TextContainer from "./textContainer";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Text Container", () => {
  it("renders the chat room details", () => {
    const fakeUsers = [{ name: "Test1" }, { name: "Test2" }];
    render(<TextContainer users={fakeUsers} />);

    expect(screen.getByText("People Currently Chatting:")).toBeInTheDocument();
    expect(screen.getByText("Test1")).toBeInTheDocument();
    expect(screen.getByText("Test2")).toBeInTheDocument();
  });
});
