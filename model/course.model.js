const mongoose = require("mongoose");
 const courseSchema = mongoose.Schema({
    id:String,
    title: String,
    category : String,
    diffiulty : String,
    description:String
 });
 const userSchema = mongoose.Schema({
    id: String,
    username: String,
    password: String,
    enrolledCourses:[]
 })
 const CourseModel = new mongoose.model("Course",[courseSchema,]);
 module.exports = CourseModel;