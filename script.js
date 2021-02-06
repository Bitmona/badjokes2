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

  $.each($("#fe").children(), (i,v) => {if (v.innerText.indexOf(input) >= 0) {
    console.log(v.innerText.toLowerCase());
    $(v).show();   
    } else {
      $(v).hide();
    }
  } ) 

}

// all jokes
function alls() {
    $.getJSON('jokes.json', function(data) {         
       $('#fe').empty();
      for (var i = 0; i < data.jokes.length; i++) {
       console.log(data.jokes[i].joke);
       var node = document.createElement("LI");
       var textnode = document.createTextNode(data.jokes[i].joke);
       node.appendChild(textnode);  
       document.getElementById("fe").appendChild(node);
      } 
   });
    }
    //animal jokes
    function anis1() {
    $.getJSON('jokes.json', function(data) {         
       $('#fe').empty();
      for (var i = 0; i < data.animals.length; i++) {
       console.log(data.animals[i].joke);
       var node = document.createElement("LI");
       var textnode = document.createTextNode(data.animals[i].joke);
       node.appendChild(textnode);  
       document.getElementById("fe").appendChild(node);
      } 
   });
    }
   //food jokes
   function food1() {
    $.getJSON('jokes.json', function(data) {         
       $('#fe').empty();
      for (var i = 0; i < data.food.length; i++) {
       console.log(data.food[i].joke);
       var node = document.createElement("LI");
       var textnode = document.createTextNode(data.food[i].joke);
       node.appendChild(textnode);  
       document.getElementById("fe").appendChild(node);
      } 
   });
    }
    //other jokes
    function oth1() {
    $.getJSON('jokes.json', function(data) {         
       $('#fe').empty();
      for (var i = 0; i < data.other.length; i++) {
       console.log(data.other[i].joke);
       var node = document.createElement("LI");
       var textnode = document.createTextNode(data.other[i].joke);
       node.appendChild(textnode);  
       document.getElementById("fe").appendChild(node);
      } 
   });
    }