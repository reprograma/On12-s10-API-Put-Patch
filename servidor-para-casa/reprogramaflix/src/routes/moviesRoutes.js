const controller = require("../controllers/moviesControllers"); // importei o arquivo de controller

const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle)
router.get("/genero", controller.getByGenre)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.criateMovie)
router.delete("/:id", controller.deletMovie)

router.put("/:id" , controller.replaceMovie)

router.patch("/:id", controller.updateTitle)

//router.patch("/:id", controller.updateAnyThing)

module.exports = router