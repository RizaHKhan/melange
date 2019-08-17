const express = require('express');
const app = express();

app.use(express.static('public'))
app.set('views', 'templates')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('landing')
})

app.listen(3000);