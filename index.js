const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Aprendendo Node");
});

app.listen(3000);

console.log("servidor rodando em https://3000-paularina-jornadafullst-3vzq4zvhe0e.ws-us85.gitpod.io/");