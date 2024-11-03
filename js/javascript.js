//nav + nav menu//
let box = document.getElementById("menu"), // Menu dropdown
  btn = document.getElementById("menu-toggle"), // Checkbox (burger icon)
  burger = document.getElementById("menu-icon"); // Hamburger icon label

btn.addEventListener("click", function () {
  if (btn.checked) {
    // If the checkbox is checked
    // Show the menu
    box.classList.remove("hidden"); // Turn off display:none
    setTimeout(function () {
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
      "transitionend",
      function (e) {
        box.classList.add("hidden"); // Add display:none after the transition
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );

    // Reset the hamburger icon back to the original state
    burger.classList.remove("open");
  }
});

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
