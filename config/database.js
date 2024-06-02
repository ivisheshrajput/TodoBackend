const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB successful");
    })
    .catch((err) => {
      console.log("Issue in DB");
      console.error(err.message);
      process.exit(1);
    });
};
module.exports = dbConnect;
