var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//the port to listen on
var port = 3000;

//create new express app
var app = express();

//set up logging on the app
app.use(morgan(dev));

//turn json in request into something we acn work with
app.use(bodyParser.json());

//turn forms in requests into something we can work with
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(){
    console.log('server listening on http://localhost:' + port)
})
