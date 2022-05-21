const express = require("express");
const app = express();

app.get("/", (reg, res) => {
  console.log("I am here");
  res.json({ message: "error" });
  res.download("server.js");
});
app.listen(process.env.PORT || 3000);
