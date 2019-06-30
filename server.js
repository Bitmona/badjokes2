// server.js
// where your node app starts

// init project
const express = require('express');
var bodyParser = require('body-parser');
const fly = require('fly');
const fs = require('fs');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); 

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.post('/', function(request, response) {
  console.log(request.body)
  response.send('thanks');  
fs.appendFileSync('https://www.badjokes.zon/message.txt', `${new Date()} laughs: ${request.body.laughs}\n`);
});

function checkHttps(req, res, next){
  // protocol check, if http, redirect to https
  
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.all('*', checkHttps);


