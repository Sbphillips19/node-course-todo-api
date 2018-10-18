var mongoose = require('mongoose');

//User
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var user = new User({
//   email: 'hereisemail@email.com'
// });
//
// user.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log('Unable to create user', e);
//   }
// );

module.exports = {
  User
};
