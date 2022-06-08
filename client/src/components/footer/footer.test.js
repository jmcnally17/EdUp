import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import SchoolFooter from "./footer";

afterEach(cleanup);

describe("Footer", () => {
  it("contains company information", () => {
    render(<SchoolFooter />);
    expect(screen.getByText("EdUp Digital School Company")).toBeInTheDocument();
    
    const linkOne = screen.getByRole("link", { name: "School Website" });
    expect(linkOne.getAttribute("href")).toBe("https://makers.tech");
  
    const linkTwo = screen.getByRole("link", { name: "Department for Education" });
    expect(linkTwo.getAttribute("href")).toBe("https://www.gov.uk/government/organisations/department-for-education");
  
    const linkThree = screen.getByRole("link", { name: "MERN Stack" });
    expect(linkThree.getAttribute("href")).toBe("https://www.geeksforgeeks.org/mern-stack/");
  
    const linkFour = screen.getByRole("link", { name: "About us" });
    expect(linkFour.getAttribute("href")).toBe("https://github.com/jmcnally17/EdUp#readme");
  });
});
