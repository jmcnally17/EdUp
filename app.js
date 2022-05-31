var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
let cors = require("cors");
const passport = require("passport");
const session = require("express-session");
var cookieParser = require("cookie-parser");

var usersRouter = require("./routes/users");
var sessionsRouter = require("./routes/sessions");
var noticesRouter = require("./routes/notices");

var app = express();

let url = process.env.REACT_APP_HEROKU_TEST_URL || "http://localhost:3000";

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// client Build
app.use(express.static(path.join(__dirname, "client/build")));

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

app.use("/users", usersRouter);
app.use("/sessions", sessionsRouter);
app.use("/notices", noticesRouter);

app.get("*", (req, res) => {
  let url = path.join(__dirname, "./client/build", "index.html");
  if (!url.startsWith("/app/"))
    // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

// app.get("*", (_req, res) => {
//   response.set("Access-Control-Allow-Origin", "*");
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
