const { Router } = require("express");
const messageController = require("../controllers/messageControllers");

const router = Router();

router.get("/", messageController.renderIndex);
router.get("/new", messageController.renderForm);
router.post("/new", messageController.postMessage);

module.exports = router;
