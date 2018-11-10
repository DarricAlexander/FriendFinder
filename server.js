var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

var PORT = process.env.PORT || 8080

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.listen(PORT, function (err) {
    if (err) throw err
    console.log('listening on port ' + PORT)
})