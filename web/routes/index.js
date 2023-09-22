var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
  res.write("<h1>Hello World</h1>")
  res.end()
})

router.get('/greenwich ', (req, res) =>{
  res.write("<h1>Hello University</h1>")
})


module.exports = router;
