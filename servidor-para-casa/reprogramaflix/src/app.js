const express = require("express"); // importando express
const cors=require("cors");
const moviesRoutes = require("./routes/moviesRoutes");// chama as rotas

const app = express(); // instanciando o express para acessar as funcionalidades contidas nele

app.use(cors());
app.use(express.json());


// definir rota padrão
app.use("/filmes", moviesRoutes);

module.exports = app;
