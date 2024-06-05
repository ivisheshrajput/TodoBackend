const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getAllTodo } = require("../controllers/getAllTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define API routes

router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
router.post("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports = router;
