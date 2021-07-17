const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "To-do Api - Reprograma",
        "version": "1.0.0",
        "mensagem": "bem vinda bebê a sua API de tarefas 🌼"
    })
})
module.exports = router