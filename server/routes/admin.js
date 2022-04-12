const express = require("express");
const app = express();
const db = require("../database");

const router = express.Router();

// controllers
const {adminget, adminpost} = require("../controllers/admin.controller");

router.get("/", adminget);
router.post("/", adminpost);

module.exports = router;
