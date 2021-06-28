const express = require("express"); // importando express
const app = express(); // instanciando o express para acessar as funcionalidades contidas nele

// chama as rotas
const movies = require("./routes/moviesRoutes")

// definir rota padrão
app.use("/filmes", movies)

module.exports = app