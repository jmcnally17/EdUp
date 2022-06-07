import React from "react";
import Message from "./message";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Message", () => {
  it("Message", () => {
    const fakeText = "Testing text";
    const fakeUser = "Test username"
    const fakeName = "Test name";
    const fakeMessage = { fakeText, fakeUser };
    console.log(fakeMessage);
    console.log("hello");
    render(<Message message={fakeMessage} name={fakeName} />);

    expect(screen.getByText("testing text")).toBeInTheDocument();
  });
});
