var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index.html')
});

router.post('/user', function(req, res){
  var userObj = new User({
    name: req.body.userName,
    movies: []
  });

  User.find({ name: req.body.userName }, function(err, user) {
  if (err || user.length == 0){
    // create a new user and save it
    userObj.save(function(err) {
      if (err) throw err;
        res.send({
          code: 200,
          message: "User Created",
          data: []
        })
    });
  }
  else{
    // user found return the user info
    res.send({
      code: 100,
      message: "User already exists",
      data: user
    })
  }
});
});

router.get('/history/:userName', function(req, res) {
  User.findOne({ name: req.params.userName })
  .then(function(user){
    console.log(user);
    res.send({
      code: 200,
      data: user
    })
  })
  // res.send({
  //   code: 200,
  //   data: "d"
  // });
  // res.render('../app/history.html');
});

router.post('/user/history', function(req, res) {
  console.log('history page called');
  console.log(req.body.movies[0]);
  User.update({ name: req.body.userName }, {$addToSet: {movies:req.body.movies[0]}},{upsert:false})
  .then(function(res){
    console.log(res);
  })
});

module.exports = router;
