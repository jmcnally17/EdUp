import React from "react";
import Day from "./day";
import dayjs from 'dayjs'
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Day", () => {
  it("renders the events for the date", () => {
    const fakeDay = new dayjs("2022-06-07")
    const fakeData = [{title: "hi", description:"bye", day:"07", month:"06", year:"22"}]
    const fakeUser = {
      admin: true
    }
    render(<Day day={fakeDay} key="1" rowIdx="1" data={fakeData} user={fakeUser}/>);
    expect(screen.getByText("hi")).toBeInTheDocument();

    const button = screen.getByRole('button', {name: "hi"})
    expect(button).toBeInTheDocument();
  });
})
