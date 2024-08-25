// function to show the popup
function showPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}

// function to hide the popup
function hidePopup(closeButton) {
  const popup = closeButton.closest('.popup');
  popup.style.display = 'none';
}

// event listener for the buttons
// success 
document.querySelector('.btn-success').addEventListener('click',
  function() {
    showPopup('successPopup');
  });

// alert
document.querySelector('.btn-alert').addEventListener('click',
  function() {
    showPopup('alertPopup');
  });

// error
document.querySelector('.btn-error').addEventListener('click',
  function() {
    showPopup('errorPopup');
  });

  // error
document.querySelector('.btn-info').addEventListener('click',
  function() {
    showPopup('infoPopup');
  });



// event listeners for the close icons 
document.querySelectorAll('.close-icon').forEach(function(closeIcon){
  closeIcon.addEventListener('click', function() {
    hidePopup(closeIcon);
  });
});