const express = require("express")
const router = express.Router()
const controller = require("../controllers/toDoController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.createTask)

router.delete("/:id", controller.deleteTask)

router.put("/:id", controller.replaceTask)

router.patch("/:id", controller.updateTitle)

//router.patch("/:id", controller.updateAnyThing)

module.exports = router