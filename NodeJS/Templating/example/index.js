const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rand", (req, res) => {
  const randNum = Math.floor(Math.random() * 100) + 1;
  res.render("rand.ejs", { rand: randNum });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
