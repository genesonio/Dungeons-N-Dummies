const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.get('/about', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('Server listening on port 8080')
