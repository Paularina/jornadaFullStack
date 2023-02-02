const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Aprendendo Node");
});

app.listen(3000);