const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {title: 'Resource Management'});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
