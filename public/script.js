

//onload function
function instan() {
   document.getElementById('searchbar').value = "";
}

//search bar
function google() {
   console.clear();
   var x = document.getElementById("fe");
   var y = document.getElementsByTagName("li");
   var input = document.getElementById('searchbar').value.toLowerCase();

   $.each($("#fe").children(), (i, v) => {
      if (v.innerText.indexOf(input) >= 0) {
         $(v).show();
      } else {
         $(v).hide();
      }
   })

}



// all jokes
function alls() {
   $('#ani2').removeClass('active');
   $('#foo2').removeClass('active');
   $('#oth2').removeClass('active');
   if ($('#home').hasClass('active')) { } else { $('#home').addClass('active'); }
   var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   var allt = snapshot.val();
   for (var i = 0; i < allt.jokes.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(allt.jokes[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
}, function (error) {
   console.log("Error: " + error.code);
});
}

//animal jokes
function anis1() {
   $('#home').removeClass('active');
   $('#foo2').removeClass('active');
   $('#oth2').removeClass('active');
   if ($('#ani2').hasClass('active')) { } else { $('#ani2').addClass('active'); }
   var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   var allt = snapshot.val();
   for (var i = 0; i < allt.animals.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(allt.animals[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
}, function (error) {
   console.log("Error: " + error.code);
});
}

//food jokes
function food1() {
   $('#home').removeClass('active');
   $('#ani2').removeClass('active');
   $('#oth2').removeClass('active');
   if ($('#foo2').hasClass('active')) { } else { $('#foo2').addClass('active'); }

   var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   var allt = snapshot.val();
   for (var i = 0; i < allt.food.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(allt.food[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
}, function (error) {
   console.log("Error: " + error.code);
});
}
//other jokes
function oth1() {
   $('#home').removeClass('active');
   $('#foo2').removeClass('active');
   $('#ani2').removeClass('active');
   if ($('#oth2').hasClass('active')) { } else { $('#oth2').addClass('active'); }
   var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   var allt = snapshot.val();
   for (var i = 0; i < allt.other.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(allt.other[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
}, function (error) {
   console.log("Error: " + error.code);
});
}





/*random joke-
$.getJSON('jokes.json', function(data) {
   joe = data.jokes
  console.log(joe[Math.floor(Math.random() * joe.length)])
});
*/

function day() {
   var daynum = Math.round((new Date().setHours(23) - new Date(new Date().getYear() + 1900, 0, 1, 0, 0, 0)) / 1000 / 60 / 60 / 24);
   var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   var allt = snapshot.val();
   var stev = document.getElementById('jd').innerText = allt.jokes[daynum].joke;
}, function (error) {
   console.log("Error: " + error.code);
});
}

