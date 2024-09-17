const express = require("express")

const router = express.Router();

const adminController = require("../controller/admin.controller");

router.post("/register", adminController.register);

router.post("/login", adminController.login);

router.delete("/delete-request/:id", adminController.deleteRequest);


module.exports = router;