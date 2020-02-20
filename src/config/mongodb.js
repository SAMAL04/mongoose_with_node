const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sathiya25:sathiya25@cluster0-st1lt.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", error => {
  console.log("MongoDB Connection error  qqqqqqqqqqqqqqqqqqqqqqqqq");
  console.error(error);
});

module.exports = db;
