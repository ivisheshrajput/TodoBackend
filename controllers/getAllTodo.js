const Todo = require("../models/Todo");

exports.getAllTodo = async (req, res) => {
  try {
    //fetch all todo items
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.error(err),
      res.status(500).json({
        success: false,
        data: "Inernal Server Error",
        message: "Server Error",
      });
  }
};
