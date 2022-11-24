const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/personal-task")
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("The MongoDB connection is error", err);
});

module.exports = connect;
