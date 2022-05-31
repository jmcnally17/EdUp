var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
let cors = require("cors");
const passport = require("passport");
const session = require("express-session");

var usersRouter = require("./routes/users");
let sessionsRouter = require("./routes/sessions");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// client Build
app.use(express.static(path.join(__dirname, "client/build")));

app.get("http://localhost:3000", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
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
