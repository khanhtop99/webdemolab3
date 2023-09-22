//1. khai baos express
const express = require('express')
//2. khai bao router (controller)
const router = express.Router()

//render ra trang homepage (views/index.hbs)
router.get('/', (req, res) => {
  res.render('index')
})

//render ra trang login (view/login.hbs)
//url: localhost:3000/dangnhap
router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/contact', (req, res) => {
  res.render('contact')
})

router.get('/demo', (req, res) => {
  //gui du lieu tu BE sang FE
  var year = 2023
  var country = "VietNam"
  var grade = 7.6
  var music = ['pop', 'jazz', 'pock', 'R&B']
  var movie = ["action", "horror", "comedy", "scifi"]
  var conutry = ["VietNam", "ThaiLand", "Singapore", "Malaysia"]
  res.render('demo',
    {
      nam : year,
      country : country,
      university : "Greenwich VietNam",
      grade : grade, 
      music : music,
      movie : movie,
    })
})

//export module router
module.exports = router