const mediaQuery = window.matchMedia("(min-width: 992px)");

function handleMediaQueryChange(event) {
    
    if (event.matches) {
        runOnMobile(); // Run mobile-specific code
    } else {
        // If false (screen width > 768px), run non-mobile code or revert styles
        console.log("Running non-mobile code");
        runOnDesktop();
        // Add non-mobile-specific code here if needed
    }
}

// Add a listener for changes in the media query
// This listens for when the media query state changes (e.g., resizing the screen) and runs handleMediaQueryChange
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Initial check on page load to apply correct code based on the current screen size
// Since no 'event' is passed in this call, we use the 'mediaQuery' object itself to check its 'matches' property
handleMediaQueryChange(mediaQuery);

// Function to run on mobile
function runOnMobile() {
    console.log("Mobile-specific code is running");
    //document.body.style.backgroundColor = "lightblue";
  
}
// Function to run on desktop
function runOnDesktop() {
    console.log("Desktop-specific code is running");
    
    $(document).ready(function(){
        $('#navigation-item-1').hover(function(){
          $('.overlay2').fadeOut(500);
          $('.overlay3').fadeOut(500);
              $('.overlay1').fadeIn(500);
          },function(){
      });
        $('#navigation-item-2').hover(function(){
          $('.overlay1').fadeOut(500);
          $('.overlay3').fadeOut(500);
              $('.overlay2').fadeIn(500);
      });
        $('#navigation-item-3').hover(function(){
          $('.overlay1').fadeOut(500);
          $('.overlay2').fadeOut(500);
              $('.overlay3').fadeIn(500);
      });  
    });
  
}