const express = require('express');
const app = express();

let port = process.env.PORT
if (port == null || port == '') {
    port = 3000
}

app.use(express.static('public'))
app.set('views', 'templates')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('landing')
})

app.listen(port);