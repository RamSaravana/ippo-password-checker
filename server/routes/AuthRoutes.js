const { saveCreds } = require("../controller/AuthController");

const router = require("express").Router();

router.post("/", saveCreds);

module.exports = router;
