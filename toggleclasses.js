document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle classes
  function toggleClasses() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      // Select all .people_profile-wrp elements
      document.querySelectorAll('.people_profile-wrp').forEach(elem => {
        elem.classList.add('u-pointer-off');
      });
      // Select all .people_overlay-close elements
      document.querySelectorAll('.people_overlay-close').forEach(elem => {
        elem.classList.remove('u-pointer-off');
      });
    }
  }

  function revertClasses() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      // Select all .people_profile-wrp elements
      document.querySelectorAll('.people_profile-wrp').forEach(elem => {
        elem.classList.remove('u-pointer-off');
      });
      // Select all .people_overlay-close elements
      document.querySelectorAll('.people_overlay-close').forEach(elem => {
        elem.classList.add('u-pointer-off');
      });
    }
  }

  // Attach event listeners
  document.querySelectorAll('.people_profile-wrp').forEach(elem => {
    elem.addEventListener('click', toggleClasses);
  });

  document.querySelectorAll('.people_overlay-close').forEach(elem => {
    elem.addEventListener('click', revertClasses);
  });
});
