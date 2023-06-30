//event listener to activate sort from button 
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  button.addEventListener('click', sort);
});

function sort() {

  //grabs input form input fields 
  var inpt1 = parseInt(document.getElementById("n1").value);
  var inpt2 = parseInt(document.getElementById("n2").value);
  var inpt3 = parseInt(document.getElementById("n3").value);

  //create arrray
  var numbers = [inpt1, inpt2, inpt3]

  //sort array
  var sorted = numbers.sort(function(a, b) {return a - b;})
  document.getElementById('sorted').textContent = sorted.join(', ');
}