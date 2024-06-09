const express = require("express");
const cors = require("cors");
const app = express();
// app.listen(3001, () => {
//   console.log("App is running succesfully");
// });

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3700;

app.use(cors());
//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/TodoRoutes");
//mount the todo APIs routes
app.use("/api/v1", todoRoutes);

//start server

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>TODO BACKEND ROUTE CHECK</h1>`);
});
