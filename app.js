var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
let cors = require("cors");
let cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const session = require("express-session");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// let testAPIRouter = require("./routes/testApi");
// let sessionRouter = require("./routes/session");

const mongoDb = "mongodb://127.0.0.1/edup_app";
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

// client Build
app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
require("./passportConfig")(passport);

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.registerUsername }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.registerPassword, 10);

      const newUser = new User({
        username: req.body.registerUsername,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User created");
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user);
});

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/testAPI", testAPIRouter);
// app.use("/sessions", sessionRouter);

app.get("http://localhost:3000", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

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
