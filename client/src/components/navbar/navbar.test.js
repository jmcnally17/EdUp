import React from "react";
import Sidenav from "./navbar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Sidenav", () => {
  it("has links to each page", () => {
    render(<Sidenav />);
    const linkOne = screen.getByRole("link", { name: "home Home" });
    expect(linkOne.getAttribute("href")).toBe("/");

    const linkTwo = screen.getByRole("link", { name: "event_note Noticeboard" });
    expect(linkTwo.getAttribute("href")).toBe("/noticeboard");

    const linkThree = screen.getByRole("link", { name: "payments Payments" });
    expect(linkThree.getAttribute("href")).toBe("/payments");

    const linkFour = screen.getByRole("link", { name: "calendar_month Calendar" });
    expect(linkFour.getAttribute("href")).toBe("/calendar");

    const linkFive = screen.getByRole("link", { name: "forum Chat Rooms" });
    expect(linkFive.getAttribute("href")).toBe("/chat");

    const linkSix = screen.getByRole("link", { name: "language School Website" });
    expect(linkSix.getAttribute("href")).toBe("http://makers.tech");
  });
});
