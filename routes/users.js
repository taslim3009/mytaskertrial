let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task');

//mongoose.connect('mongodb+srv://Taslim:campk12@cluster0.floqemj.mongodb.net/task?retryWrites=true&w=majority')

let schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  }
)
module.exports = mongoose.model('tasks', schema);