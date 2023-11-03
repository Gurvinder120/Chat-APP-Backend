const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Guru:kr$signOP6990@cluster0.3df2kqx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected succesfully");
  });

const demoSchema = new mongoose.Schema({
  //   username: String,
  useremail: String,
});

const User = mongoose.model("User", demoSchema);

module.exports = User;
