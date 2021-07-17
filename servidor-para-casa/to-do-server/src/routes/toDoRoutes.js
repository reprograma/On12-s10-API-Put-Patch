const express = require("express")
const router = express.Router()
const controller = require("../controllers/toDoController")

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.createTask);

router.delete("/:id", controller.deleteTask);

router.put("/:id", controller.replaceTask);

router.patch("/atualizardescricao/:id", controller.updateDescription);
router.patch("/atualizar/:id", controller.updateAnything);


module.exports = router