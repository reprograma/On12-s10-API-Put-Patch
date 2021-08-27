
const express = require("express");
const router = express.Router();

const controller = require("../controllers/postsControllers");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/create", controller.createPost);

router.put("/:id", controller.replacePost);

router.patch("/updateTitle/:id", controller.updateTitle);

module.exports = router;