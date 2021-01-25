const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");
mongoose.set("debug", true)
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
    task: String
});
    
// create a Model, MVC
const Todo = mongoose.model("Todo", todoSchema)

// export todo model
// use ES2015 promises
module.exports = Todo;