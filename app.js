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

var url = process.env.REACT_APP_HEROKU_TEST_URL || "http://localhost:3000";

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  cors({
    origin: url, // <-- location of the react app were connecting to
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
  console.log("Hello world");
  console.log(req);
  // res.set("Access-Control-Allow-Origin", "*");
  console.log("MAKERS!!!");
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
  console.log("LAST MESSAGE");
});

// catch 404 and forward to error handler.
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.send("Something went wrong");
});

module.exports = app;

module.exports = app;

//// Yesterdays version of code

// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var logger = require("morgan");
// let cors = require("cors");
// const passport = require("passport");
// const session = require("express-session");

// var usersRouter = require("./routes/users");
// var sessionsRouter = require("./routes/sessions");
// var noticesRouter = require("./routes/notices");

// var app = express();

// var url = process.env.REACT_APP_HEROKU_TEST_URL || "http://localhost:3000";

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// // client Build
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

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
// });

// module.exports = app;
