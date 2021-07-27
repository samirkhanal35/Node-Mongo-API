const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/add", (req, res) => {
  res.render("add-course");
});

router.post("/add", (req, res) => {
  var course = new CourseModel();
  course.courseName = req.body.courseName;
  course.courseDuration = req.body.courseDuration;
  course.courseFee = req.body.courseFees;
  course.courseId = Math.ceil(Math.random() * 1000000000);
  course.save((err, doc) => {
    if (!err) {
      res.redirect("/course/list");
      //   res.json({ message: "successfull", status: "OK"})
    } else {
      res.send("Error Occured");
    }
  });
});

router.get("/list", (req, res) => {
  //Setting

  //   CourseModel.find((err, docs) => {
  //     if (!err) {
  //       console.log(docs);
  //       res.render("list", { data: docs });
  //       //   res.send("Course Controller");
  //     } else {
  //       console.log("Error");
  //     }
  //   });

  CourseModel.find({})
    .lean()
    .then((docs) => {
      res.render("list", { data: docs });
    });
});

module.exports = router;
