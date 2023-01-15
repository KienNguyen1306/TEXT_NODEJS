const express = require("express");
const router = express.Router();

const portControler = require("../controlers/post_controler.js");

router.get("/", portControler.getAll);
router.get("/:id", portControler.getById);
router.post("/", portControler.create);
router.put("/:id", portControler.update);
router.delete("/:id", portControler.delete);

module.exports = router;
