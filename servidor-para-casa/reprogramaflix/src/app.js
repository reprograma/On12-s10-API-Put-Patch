const express = require("express");
const cors = require("cors"); // importando express

const movies = require("./routes/moviesRoutes");
const series = require("./routes/seriesRoutes");
const index = require("./routes/index");

const app = express(); // instanciando o express para acessar as funcionalidades contidas nele


app.use(cors());
app.use(express.json());




// definir rota padrão
app.use("/",index);
app.use("/filmes", movies);
app.use("/series", series);

module.exports = app