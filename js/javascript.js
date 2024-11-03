//nav + nav burger icon//
let box = document.getElementById("menu"), // Menu dropdown
  btn = document.getElementById("menu-toggle"), // Checkbox (burger icon)
  burger = document.getElementById("menu-icon"); // Hamburger icon label

btn.addEventListener("click", function () {
  if (btn.checked) {
    // If the checkbox is checked
    // Show the menu
    box.classList.remove("hidden"); // Turn off display:none
    setTimeout(() => { //()=> is an arrow function which is better for one line functions than a tradition function
      box.classList.remove("visuallyhidden"); // Transition opacity to 1 after a small delay
      box.classList.add("visible"); // Add 'visible' class to trigger transitions
    }, 20);

    // Transform the hamburger icon into an "X"
    burger.classList.add("open");
  } else {
    // If the checkbox is unchecked
    // Hide the menu
    box.classList.remove("visible"); // Remove 'visible' class to hide menu items
    box.classList.add("visuallyhidden"); // Change opacity to 0
    box.addEventListener(
      "transitionend", //waits until any transition by the css is complete before executing following code
      () => box.classList.add("hidden"), //adds the hidden class to the menu activating display: none
      {capture: false,once: true,passive: false,}//just ensures addEventListener works the way we want
    );

    // Reset the hamburger icon back to the original state
    burger.classList.remove("open");
  }
});

//Fade out and close burger menu on link click
const contents = document.querySelectorAll('.content');//targets elements with the class "content" to be faded out
const navLinks = document.querySelectorAll('a');//targets all links on the page to have a transition effect

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();

      // Close the burger menu if it's open
      if (btn.checked) {
          btn.checked = false;
          box.classList.remove("visible");
          box.classList.add("visuallyhidden");
          burger.classList.remove("open");
          box.addEventListener(
              "transitionend",
              () => box.classList.add("hidden"),
              { capture: false, once: true, passive: false }
          );
      }

      // Fade out content
      contents.forEach(content => content.classList.add('fade-out'));

      
      // Navigate after animation
      setTimeout(() => {
          window.location.href = link.href;
      }, 500); // Adjust timing to match the fade-out duration
  });
});

// Fade in content on page load
window.addEventListener('load', () => {
  contents.forEach(content => content.classList.add('fade-in'));
});




//code for ticker tape on about page
var hobbyList = [
  { hobby: "Watching", subject: "House, M.D." },
  { hobby: "Reading", subject: "Morning Star" },
  { hobby: "Playing", subject: "UFO50" },
  { hobby: "Learning", subject: "How to Code Site" },
];

// Populate #ticker content
for (var i = 0; i < hobbyList.length; i++) {
  $("#ticker p").append(
    "<span class='subhead'>" +
      hobbyList[i].hobby +
      ":</span> " +
      "<span class='subhead'>" +
      hobbyList[i].subject +
      "</span> " +
      "<span class='gap'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</span>"
  );
}

// Duplicate content to create seamless scrolling
$("#ticker p").append($("#ticker p").html());
