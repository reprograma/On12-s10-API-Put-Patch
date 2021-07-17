const express = require("express");
const router = express.Router();

const controller = require("../controllers/seriesControllers"); 



router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);

router.post("/inserir", controller.postSerie);

router.put("/:id", controller.replaceSerie);

router.delete("/:id", controller.deleteSerie);

router.patch("/atualizartitulo/:id", controller.updateTitle);
router.patch("/atualizar/:id", controller.updateAnything);


module.exports = router