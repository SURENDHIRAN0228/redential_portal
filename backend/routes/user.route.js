const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.post("/maintenance-requests", userController.createRequest);

router.get("/", userController.getAllRequests );


module.exports = router;