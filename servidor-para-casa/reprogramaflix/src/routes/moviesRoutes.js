const controller = require("../controllers/moviesControllers"); // importei o arquivo de controller

const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.createMovies);

router.patch("/atualizarTitle", controller.updateTitle);

router.put("/atualizar",controller.replaceMovie);

router.patch("/atualizarAnything", controller.updateAnything);

router.delete("/:id", controller.deletarMovies);


module.exports = router;