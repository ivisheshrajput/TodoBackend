//import the model
const Todo = require("../models/Todo.js");

//define route handler
exports.updateTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { id } = req.params;
    const { title, description } = req.body;
    //create a new todo obj and insert in db

    //findByIdAndUpdate(id, update, options, callback); takes 4 falues
    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() },
      { new: true } //If you do this it will give the updated result back
    );
    //send a json response with a success flag

    if (response) {
      res.status(200).json({
        success: true,
        data: response,
        message: "Entry Updated Successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        data: "Update is Not Done",
        message: "No Entry is Updated",
      });
    }
  } catch (err) {
    if (err.name === "CastError") {
      res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    } else {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
};
