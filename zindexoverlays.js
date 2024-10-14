document.addEventListener("DOMContentLoaded", function () {
  // Function to increase the z-index of .div-block-2
  function increaseZIndex(event) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      var parentDiv = event.target.closest('.people_overlay-outer');
      if (parentDiv) {
        parentDiv.style.zIndex = 3;
      }
    }
  }

  // Function to reset the z-index of .div-block-2 with a delay
  function decreaseZIndex(event) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      var parentDiv = event.target.closest('.people_overlay-outer');
      if (parentDiv) {
        // Use setTimeout to delay execution by 500 milliseconds (0.5 seconds)
        setTimeout(function () {
          parentDiv.style.zIndex = 1;
        }, 500);
      }
    }
  }

  // Get all the .people_profile-wrp elements
  var profiles = document.querySelectorAll('.people_profile-wrp');

  // Add click event listener to each .people_profile-wrp element
  profiles.forEach(function (profile) {
    profile.addEventListener('click', increaseZIndex);
  });

  // Get all the .people_overlay-close buttons
  var closeButtons = document.querySelectorAll('.people_overlay-close');

  // Add click event listener to each .people_overlay-close button
  closeButtons.forEach(function (button) {
    button.addEventListener('click', decreaseZIndex);
  });
});
