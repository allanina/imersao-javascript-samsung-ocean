const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

const lista = [
  {
    id: 1,
    nome: "Paulo",
    pontos: 21,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 52,
  },
  {
    id: 3,
    nome: "Beatriz",
    pontos: 97,
  },
];

app.listen(3000);
