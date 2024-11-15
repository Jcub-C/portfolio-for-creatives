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

//log in console which element I clicked on
document.addEventListener("click", function(event) {
  console.log("Clicked element:", event.target);
});

//projects scroll fade
window.addEventListener('scroll', function() {
  const elements = [
    { target: document.getElementById('target-element1'), trigger: document.getElementById('trigger-selection1') },
    { target: document.getElementById('target-element2'), trigger: document.getElementById('trigger-selection2') },
    { target: document.getElementById('target-element3'), trigger: document.getElementById('trigger-selection3') },
    { target: document.getElementById('target-element4'), trigger: document.getElementById('trigger-selection4') },
    { target: document.getElementById('target-element5'), trigger: document.getElementById('trigger-selection5') },
    { target: document.getElementById('target-element6'), trigger: document.getElementById('trigger-selection6') },
    { target: document.getElementById('target-element7'), trigger: document.getElementById('trigger-selection7') },
    { target: document.getElementById('target-element8'), trigger: document.getElementById('trigger-selection8') },
    { target: document.getElementById('target-element9'), trigger: document.getElementById('trigger-selection9') },
    { target: document.getElementById('target-element10'), trigger: document.getElementById('trigger-selection10') }
  ];

  // Define the opacity range in viewport height percentages
  const fadeInStart = window.innerHeight * 0.35;  // 35% of viewport height
  const fullOpacityStart = window.innerHeight * 0.4;  // 40% of viewport height
  const fadeOutStart = window.innerHeight * 0.8;  // 80% of viewport height
  const fadeOutEnd = window.innerHeight * 0.85;  // 85% of viewport height

  elements.forEach(({ target, trigger }) => {
    const triggerPosition = trigger.getBoundingClientRect().top;
    let opacity;

    if (triggerPosition >= fadeInStart && triggerPosition <= fullOpacityStart) {
      // Gradually increase opacity from 0 to 1
      opacity = (triggerPosition - fadeInStart) / (fullOpacityStart - fadeInStart);
    } else if (triggerPosition > fullOpacityStart && triggerPosition <= fadeOutStart) {
      // Set full opacity (1) between 40% and 80% viewport height
      opacity = 1;
    } else if (triggerPosition > fadeOutStart && triggerPosition <= fadeOutEnd) {
      // Gradually decrease opacity from 1 to 0
      opacity = 1 - (triggerPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else {
      // Outside defined ranges, set opacity to 0
      opacity = 0;
    }

    // Apply the calculated opacity to the target element
    target.style.opacity = opacity;
  });
});


//project carousel

const slider = document.querySelector('.slider');
let scrollPosition = 0;

function scrollNext() {
  const cardWidth = slider.offsetWidth; // Get the slider's width
  scrollPosition += cardWidth;
  if (scrollPosition >= slider.scrollWidth) {
    scrollPosition = 0; // Loop back to the start
  }
  slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

function scrollPrev() {
  const cardWidth = slider.offsetWidth;
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) {
    scrollPosition = slider.scrollWidth - cardWidth; // Go to the last card
  }
  slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

// Event listeners for buttons (you'll need to add these in your HTML)
document.querySelector('.next-button').addEventListener('click', scrollNext);
document.querySelector('.prev-button').addEventListener('click', scrollPrev);


