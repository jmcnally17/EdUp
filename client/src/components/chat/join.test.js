import React from "react";
import Join from "./join";
import { Routes, Route } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Join", () => {
  it("shows a list of chat rooms", () => {
    const fakeUser = {
      username: "Test"
    }
    render(<div>
    <Routes>
    <Route path="/" element={<Join user={fakeUser} />} />
    </Routes>
    </div>);
  });
});
