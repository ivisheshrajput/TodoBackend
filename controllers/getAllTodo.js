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

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Todo.findById({ _id: id });
    res.status(200).json({
      succcess: true,
      data: response,
      message: `Data fetched for ${id}`,
    });
  } catch (err) {
    console.log(err),
      res.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: "Server Error",
      });
  }
};
