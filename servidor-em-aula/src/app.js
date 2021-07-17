const express = require("express"); // importando express
const cors = require("cors"); // importando o cors
const postsRoutes = require("./routes/postsRoutes")

const app = express();

app.use(cors());
app.use(express.json());//transformar os dados em json parceamento do body

app.use("/posts", postsRoutes);

module.exports = app;