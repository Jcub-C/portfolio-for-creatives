//nav + nav menu//
let box = document.getElementById('menu'),  // Menu dropdown
    btn = document.getElementById('menu-toggle'),  // Checkbox (burger icon)
    burger = document.getElementById('menu-icon'); // Hamburger icon label

btn.addEventListener('click', function () { 
  if (btn.checked) {  // If the checkbox is checked
    // Show the menu
    box.classList.remove('hidden'); // Turn off display:none
    setTimeout(function () {
      box.classList.remove('visuallyhidden'); // Transition opacity to 1 after a small delay
      box.classList.add('visible'); // Add 'visible' class to trigger transitions
    }, 20);
    
    // Transform the hamburger icon into an "X"
    burger.classList.add('open');
    
  } else {  // If the checkbox is unchecked
    // Hide the menu
    box.classList.remove('visible'); // Remove 'visible' class to hide menu items
    box.classList.add('visuallyhidden'); // Change opacity to 0
    box.addEventListener('transitionend', function(e) {
      box.classList.add('hidden');  // Add display:none after the transition
    }, {
      capture: false,
      once: true,
      passive: false
    });
    
    // Reset the hamburger icon back to the original state
    burger.classList.remove('open');
  }
});

