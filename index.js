const express = require('express');
const app = express();

//this code makes the port the app listens to dynamic. For example, when it is live, heroku is using the port that it wants using the first line.
//but if that port is null or nothing, assign in 3000. which then allows us to open this on our local computer under localhost:3000 url.
let port = process.env.PORT
if (port == null || port == '') {
    port = 3000
}

//this lets the app know there are css files in the public folder
app.use(express.static('public'))

//this lets the app know that there are html (ejs rather) files in the templates folder. The first parameter is a express veriable so it cannot be different.
//the second variable is whatever we need the folder where all of our html elements are stored.
app.set('views', 'templates')

//this lets the app know we're using EJS as our templating engine. 
app.set('view engine', 'ejs')

//this renders the landing page. 
app.get('/', function(req, res) {
    res.render('landing')
})


app.listen(port);