// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressBarWidth = document.querySelector(".progress-container").offsetWidth;
  
  // Update the progress bar width
  document.getElementById("myBar").style.width = scrolled + "%";
  
  // Calculate the dog's new position
  var dogPosition = (progressBarWidth * scrolled / 100) - 10; // Adjust '-10' to center the dog
  
  // Update the dog's position
  document.getElementById("dog").style.left = dogPosition + "px";
}
