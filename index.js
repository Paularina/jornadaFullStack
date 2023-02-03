const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Aprendendo Node");
});

//Endpoint/oi

app.get("/oi", function (req, res) {
  res.send("Oi");
});

//Lista de informaçôes

const items = ["Café","Leite","Ovo","Manteiga","Acúcar"];

//Índices =      0       1       2     3           4

//CRUD - Lista de Informações

//Endpoint - Read All [GET]/Items

app.get("/items", function (req, res) {
  res.send(items);
});

//Endpoint - Read ById [GET]

app.get("/items/1", function (req, res) {
  res.send(items[1]);
});
 
app.listen(3000);

console.log("servidor rodando em https://3000-paularina-jornadafullst-3vzq4zvhe0e.ws-us85.gitpod.io/");