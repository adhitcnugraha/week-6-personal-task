const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://root1:root1@cluster0.fbk7bly.mongodb.net/nodejs-personaltask?retryWrites=true&w=majority"
    )
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("The MongoDB connection is error", err);
});

module.exports = connect;
