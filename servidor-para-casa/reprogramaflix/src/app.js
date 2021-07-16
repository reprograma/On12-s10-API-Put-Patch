const express = require("express");
const cors = require("cors");

// chama as rotas
const movies = require("./routes/moviesRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/filmes", movies)

module.exports = app