const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getAllTodo } = require("../controllers/getAllTodo");

//define API routes

router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
module.exports = router;
