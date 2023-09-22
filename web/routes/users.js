var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
  res.send("<h1>Hello cu</h1>")
})

router.get('/fpt', (req, res) =>{
  res.send("<h1>This is FPT user</h1>")
})

module.exports = router;
