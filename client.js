var express = require('express');
var path = require('path');

// start express module
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

/*
 * Visit the home page
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('My site started at http://%s:%s', host, port);
});

app.get('/animals', function (req, res) {
  res.sendFile(__dirname + '/animals.html');
});




function myFunction() {
  var laughs = Number(prompt("How many jokes did you laugh at?"))
  if (laughs < 127) {
    if (laughs > 0) {
      if (laughs != null) {
        alert("Thanks for laughing! (or not!)")    
        console.log(laughs);
        var txt1 = document.createElement("ul");
        var txt3 = document.createElement("li"); 
        txt3.innerHTML = laughs + " Laughs";   
        $("body").append(txt1,txt3); 
        $.ajax({
          url: '/',
          method: "post",
          data: {laughs:laughs}
        });
      }
    } else {
      alert("Bad results! Try a number under 127.")
    }
  } else { 
    alert("Bad results! Try a number under 127.")
  }
} 

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 window.location.assign("https://mobile-jokes.glitch.me/")
}


