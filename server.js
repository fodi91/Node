const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (reg, res) => {
  console.log("I am here");
  //res.json({ message: "error" });
  res.download("server.js");
  //res.render("index", { text: "world" });
});

app.post("/users", (req, res) => {
  res.send(req.body.value);
});
app.get("/users/new", (req, res) => {
  res.send("user form");
});
app.listen(process.env.PORT || 3000);
