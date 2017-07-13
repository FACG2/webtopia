
/*  function for the text area to increase lines */
function adjust_textarea(h) {
  h.style.height = "80px";
  h.style.height = (h.scrollHeight) + "px";
}

/*  function for the main to be responsive */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
