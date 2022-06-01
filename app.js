var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
let cors = require("cors");
const passport = require("passport");
const session = require("express-session");

// new
//var cookieParser = require("cookie-parser");
////

var usersRouter = require("./routes/users");
var calendarRouter = require("./routes/calendar");
var sessionsRouter = require("./routes/sessions");
var noticesRouter = require("./routes/notices");

var app = express();

let url = process.env.REACT_APP_HEROKU_TEST_URL || "http://localhost:3000";

app.use(logger("dev"));
app.use(express.json());

// New
//app.use(cookieParser());
////
app.use(express.urlencoded({ extended: false }));

// Changed to "public" from "client/build"
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: url, // <-- location of the react app we're connecting too.
    credentials: true,
  })
);

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

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Route handling for React

// app.get("*", (req, res) => {
//   let urls = path.join(__dirname, "./client/build", "index.html");
//   if (!urls.startsWith("/app/"))
//     // since we're on local windows
//     urls = urls.substring(1);
//   res.sendFile(urls);
// });

// app.get("*", (_req, res) => {
//   //response.set("Access-Control-Allow-Origin", "*");
//   res.sendFile(path.join(__dirname, "./client/build", "index.html"));
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
});

module.exports = app;

//// Yesterdays version of code

// client Build
// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// app.use(
//   cors({
//     origin: url, // <-- location of the react app were connecting to
//     credentials: true,
//   })
// );

// app.use(
//   session({
//     secret: "secretcode",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.urlencoded({ extended: false }));
// require("./passportConfig")(passport);

// app.use("/users", usersRouter);
// app.use("/sessions", sessionsRouter);
// app.use("/notices", noticesRouter);
