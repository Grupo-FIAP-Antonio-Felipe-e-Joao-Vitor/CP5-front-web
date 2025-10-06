const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const HOST = "localhost";
const PORT = 5001;

const app = express();
app.use(express.json());

app.listen(PORT, console.log(`Servidor rodando em http://${HOST}:${PORT}`))