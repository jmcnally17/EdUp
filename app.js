var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
let cors = require("cors");
const passport = require("passport");
const session = require("express-session");
var cookieParser = require("cookie-parser");

var usersRouter = require("./routes/users");
var calendarRouter = require("./routes/calendar");
var sessionsRouter = require("./routes/sessions");
var noticesRouter = require("./routes/notices");
var chatRouter = require("./routes/chat");
var paymentsRouter = require("./routes/payments");

var app = express();

var url = process.env.REACT_APP_URL || "http://localhost:3000";

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: url, // <-- location of the react app we're connecting too
      credentials: true,
    })
  );
}

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
require("./passportConfig")(passport);

app.use("/backend/sessions", sessionsRouter);
app.use("/backend/notices", noticesRouter);
app.use("/backend/users", usersRouter);
app.use("/backend/calendar", calendarRouter);
app.use("/backend/chat", chatRouter);
app.use("/backend/payments", paymentsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// catch 404 and forward to error handler.
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.send("Something went wrong");
});

module.exports = app;
