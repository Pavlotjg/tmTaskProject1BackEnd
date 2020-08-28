var express = require('express');
var router = express.Router();
const users = require('../database/users');

router.get('/', function (req, res) {
  res.json(users);
});


module.exports = router;
