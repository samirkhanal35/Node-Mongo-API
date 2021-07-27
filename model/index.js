const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Edureka",
  { useNewUrlParser: true },
  (error) => {
    if (!error) {
      console.log("Successfully connected");
    } else {
      console.log("Error connecting to database");
    }
  }
);

const Course = require("./courses.mode");
