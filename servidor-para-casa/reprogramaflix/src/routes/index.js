const express = require("express");
const router = express.Router();

router.get("/",(request, response) => {
    response.status(200).send({
        "titulo": "{reprograma}flix",
        "version": "1.0.0", 
        "mensagem": "Bem vinda a {reprograma}flix. "
    })
});

module.exports = router;