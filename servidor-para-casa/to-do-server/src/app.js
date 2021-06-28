const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors()) //resolve o problema de uma só origem do navegador
app.use(express.json()) //transforma em json o body (que vem em strig)

const index = require("./routes/index")
const tarefas = require("./routes/toDoRoutes")

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app