import React from "react";
import New from "./new";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("New Notice", () => {
  it("has inputs fields for title and description", () => {
    const fakeUser = {
      admin: true,
    };
    render(<New user={fakeUser} />);

    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Title");

    const descriptionEl = screen.getByLabelText("description");
    expect(descriptionEl.value).toBe("");
    expect(descriptionEl.placeholder).toBe("Description");
  });
});
