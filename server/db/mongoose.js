var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://test:dummy123@ds135993.mlab.com:35993/todo-app' ||
    'mongodb://localhost:27017/TodoApp'
);

module.exports = { mongoose };
