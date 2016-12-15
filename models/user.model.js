var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  // time: String,
  // watchTime: String,
  movies: [{
    "movieId" : String,
    "title" : String,
    "description" : String,
    "url" : String,
    "images" : String,
    "publishedDate" : Date,
    "watchTime" : Date,
    "date" : Date
}]
},{
  timestamps: true
});


var User = mongoose.model('User', userSchema);

module.exports = User;
