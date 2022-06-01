const calendarEvent = require('../../models/calendarEvent')
require("../mongodb_helper");
const mongoose = require("mongoose")

describe(calendarEvent, () => {
  beforeEach((done) => {
    mongoose.connection.collections.calendars.drop(() => {
      done();
    });
  });
  it('has a title, description, day, month, year and label', () => {
    const calendar = new calendarEvent({
      title: "Soccer",
      description: "Soccer today",
      day: "20",
      month: "10",
      year: "22",
      selectedLabel: "green"
    })
    expect(calendar.title).toBe("Soccer")
    expect(calendar.description).toBe("Soccer today")
    expect(calendar.day).toBe("20")
    expect(calendar.month).toBe("10")
    expect(calendar.year).toBe("22")
    expect(calendar.selectedLabel).toBe("green")
  })
})