var express = require('express');
var router = express.Router();

// Get Login Page
router.get('/login', function(req, res, next){
  res.render('account/login')
})

// Get Register Page
router.get('/register', function(req, res, next){
  res.render('account/register')
})

module.exports = router;
