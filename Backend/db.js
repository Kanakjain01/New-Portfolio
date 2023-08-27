const mongoose = require("mongoose");
function connectToMongo() {
  mongoose
    .connect(
      "mongodb+srv://kanak:kanakjain123@cluster0.hfwla6u.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB:", err);
    });
}
module.exports = connectToMongo;
