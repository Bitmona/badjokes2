console.log('hi');

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


function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = li.textContent || li.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




