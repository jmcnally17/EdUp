import React from "react";
import Noticeboard from "./noticeboard";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Noticeboard", () => {
  it("renders the school notice board", () => {
    const fakeUser = {
      admin: false
    }
    render(<Noticeboard user={fakeUser} />);
    expect(screen.getByText("School Notice Board")).toBeInTheDocument();
  });
  
  it("has a link to make a new notice if user is an admin", () => {
    const fakeUser = {
      admin: true
    }
    render(<Noticeboard user={fakeUser} />);
    const link = screen.getByRole("link", { name: "Add New Notice" });
    expect(link.getAttribute("href")).toBe("/noticeboard/new");
  });
});

