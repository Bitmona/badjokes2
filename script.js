

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
   if ( $('#home').hasClass('active') ) {} else {$('#home').addClass('active');}
   $.getJSON('/jokes.json', function (data) {
      $('#fe').empty();
      for (var i = 0; i < data.jokes.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(data.jokes[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
   });
}

//animal jokes
function anis1() {
   $('#home').removeClass('active');
   $('#foo2').removeClass('active');
   $('#oth2').removeClass('active');
   if ( $('#ani2').hasClass('active') ) {} else {$('#ani2').addClass('active');}
   $.getJSON('/jokes.json', function (data) {
      $('#fe').empty();
      for (var i = 0; i < data.animals.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(data.animals[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
   });
}

//food jokes
function food1() {
   $('#home').removeClass('active');
   $('#ani2').removeClass('active');
   $('#oth2').removeClass('active');
   if ( $('#foo2').hasClass('active') ) {} else {$('#foo2').addClass('active');}
   $.getJSON('/jokes.json', function (data) {
      $('#fe').empty();
      for (var i = 0; i < data.food.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(data.food[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
   });
}
//other jokes
function oth1() {
   $('#home').removeClass('active');
   $('#foo2').removeClass('active');
   $('#ani2').removeClass('active');
   if ( $('#oth2').hasClass('active') ) {} else {$('#oth2').addClass('active');}
   $.getJSON('/jokes.json', function (data) {
      $('#fe').empty();
      for (var i = 0; i < data.other.length; i++) {
         var node = document.createElement("LI");
         var textnode = document.createTextNode(data.other[i].joke);
         node.appendChild(textnode);
         document.getElementById("fe").appendChild(node);
      }
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
   $.getJSON('/jokes.json', function (data) {
      var stev = document.getElementById('jd').innerText = data.jokes[daynum].joke;

   });
}