const express = require("express");
const router = express.Router();

// importei o arquivo de controller
const controller = require("../controllers/moviesControllers"); 

//criar rotas
router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);

router.post("/create",controller.createMovie);

router.delete("/:id",controller.deleteMovie);

router.put("/:id",controller.replaceMovie);
router.patch("/updateTitle/:id",controller.updateTitle);
router.patch("/update/:id",controller.updateAnything);

module.exports = router;