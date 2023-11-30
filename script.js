// Get the modal element
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('openModal');

// Get the close button
var span = document.getElementsByClassName('close-modal')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on the close button or outside the modal, close it
span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
