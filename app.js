const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = new express();
//ejs allows templating
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/work-experience", (req, res) => {
  res.render("work-experience");
});

app.get("/education", (req, res) => {
  res.render("education");
});

app.listen(3000, (req, res) => {
  console.log("server is running");
});
