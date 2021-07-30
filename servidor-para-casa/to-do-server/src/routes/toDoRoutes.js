const express = require("express");
const router = express.Router();
const controller = require("../controllers/toDoController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.createTask);

router.put("/atualizar",controller.replaceTask);

router.patch("/atualizarDescription", controller.updateDescription);

router.delete("/:id", controller.deleteTask);

module.exports = router;