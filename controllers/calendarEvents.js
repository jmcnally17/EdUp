const CalendarEvents = require('../models/calendarEvent.js');

const CalendarController ={ 
  Index: (req, res) => {
    CalendarEvents.find().populate().exec((err, events) => {
      if (err) {
        throw err;
      }
      res.json( { 
        events: events,
      });
    
    });
  },
  Create: (req,res) => {
    const eventInfo = req.body
    const calendarEvent = new CalendarEvents(eventInfo);
    calendarEvent.save((err) => {
      if(err) {
        throw err;
      }
      res.status(201).redirect("/");
    });
  }
}

module.exports = CalendarController;