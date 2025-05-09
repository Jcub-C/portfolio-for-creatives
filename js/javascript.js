//nav + nav burger icon//
let box = document.getElementById("menu"), // Menu dropdown
  btn = document.getElementById("menu-toggle"), // Checkbox (burger icon)
  burger = document.getElementById("menu-icon"); // Hamburger icon label

btn.addEventListener("click", function () {
  if (btn.checked) {
    // If the checkbox is checked
    // Show the menu
    box.classList.remove("hidden"); // Turn off display:none
    setTimeout(() => {
      //()=> is an arrow function which is better for one line functions than a tradition function
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
      { capture: false, once: true, passive: false } //just ensures addEventListener works the way we want
    );

    // Reset the hamburger icon back to the original state
    burger.classList.remove("open");
  }
});

//Fade out and close burger menu on link click
const contents = document.querySelectorAll(".content"); //targets elements with the class "content" to be faded out
const navLinks = document.querySelectorAll("a"); //targets all links on the page to have a transition effect

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Close the burger menu if it's open
    if (btn.checked) {
      btn.checked = false;
      box.classList.remove("visible");
      box.classList.add("visuallyhidden");
      burger.classList.remove("open");
      box.addEventListener("transitionend", () => box.classList.add("hidden"), {
        capture: false,
        once: true,
        passive: false,
      });
    }

    // Fade out content
    contents.forEach((content) => content.classList.add("fade-out"));

    // Navigate after animation
    setTimeout(() => {
      window.location.href = link.href;
    }, 500); // Adjust timing to match the fade-out duration
  });
});

// Fade in content on page load
window.addEventListener("load", () => {
  contents.forEach((content) => content.classList.add("fade-in"));
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
document.addEventListener("click", function (event) {
  console.log("Clicked element:", event.target);
});

//projects scroll fade
// Function to handle fading of elements based on scroll position
function handleScrollFade() {
  const elements = [
    { target: document.getElementById("target-element1"), trigger: document.getElementById("trigger-selection1") },
    { target: document.getElementById("target-element2"), trigger: document.getElementById("trigger-selection2") },
    { target: document.getElementById("target-element3"), trigger: document.getElementById("trigger-selection3") },
    { target: document.getElementById("target-element4"), trigger: document.getElementById("trigger-selection4") },
    { target: document.getElementById("target-element5"), trigger: document.getElementById("trigger-selection5") },
    { target: document.getElementById("target-element6"), trigger: document.getElementById("trigger-selection6") },
    { target: document.getElementById("target-element7"), trigger: document.getElementById("trigger-selection7") },
    { target: document.getElementById("target-element8"), trigger: document.getElementById("trigger-selection8") },
    { target: document.getElementById("target-element9"), trigger: document.getElementById("trigger-selection9") },
    { target: document.getElementById("target-element10"), trigger: document.getElementById("trigger-selection10") },
  ];

  // Define thresholds for opacity changes
  const fadeInStart = window.innerHeight * 0.05;
  const fullOpacityStart = window.innerHeight * 0.1;
  const fadeOutStart = window.innerHeight * 0.9;
  const fadeOutEnd = window.innerHeight * 0.95;

  elements.forEach(({ target, trigger }) => {
    if (!target || !trigger) {
      console.warn("Missing target or trigger element:", { target, trigger });
      return;
    }

    // Get the vertical position of the trigger element
    const triggerPosition = trigger.getBoundingClientRect().top;
    let opacity;

    if (triggerPosition >= fadeInStart && triggerPosition <= fullOpacityStart) {
      opacity = (triggerPosition - fadeInStart) / (fullOpacityStart - fadeInStart);
    } else if (triggerPosition > fullOpacityStart && triggerPosition <= fadeOutStart) {
      opacity = 1;
    } else if (triggerPosition > fadeOutStart && triggerPosition <= fadeOutEnd) {
      opacity = 1 - (triggerPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else {
      opacity = 0;
    }

    // Apply opacity and manage display properties
    if (opacity > 0) {
      target.style.display = "flex"; // Set display to flex when visible
      target.style.opacity = opacity.toFixed(2); // Ensure opacity is a valid number
    } else {
      // Wait for the fade-out transition to complete before hiding
      target.style.opacity = "0";
      setTimeout(() => {
        if (target.style.opacity === "0") {
          target.style.display = "none"; // Hide only when opacity is 0
        }
      }, 300); // Match this to your CSS transition duration
    }
  });
}

// Media query check and event listener setup
function setupScrollListener() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  if (isDesktop) {
    // Add the scroll event listener for desktop view
    window.addEventListener("scroll", handleScrollFade);
  } else {
    // Remove the scroll event listener for mobile view
    window.removeEventListener("scroll", handleScrollFade);

    // Reset opacity and display of all target elements on mobile
    const targets = document.querySelectorAll("[id^='target-element']");
    targets.forEach(target => {
      if (target) {
        target.style.opacity = "1"; // Fully visible
        target.style.display = "flex"; // Ensure they remain visible
      }
    });
  }
}

// Call setupScrollListener initially and on window resize
setupScrollListener();
window.addEventListener("resize", setupScrollListener);


// Attach media query listener to dynamically apply changes
const mediaQuery = window.matchMedia("(min-width: 768px)");
mediaQuery.addEventListener("change", setupScrollListener);

// Initial setup
setupScrollListener();


// Initial setup and re-check on window resize
setupScrollListener();
window.addEventListener("resize", setupScrollListener);

//project carousel

document.querySelectorAll(".carousel").forEach((carousel) => {
  // Get elements scoped to this specific carousel
  const cards = carousel.querySelectorAll(".card");
  const nextButton = carousel.querySelector(".next-button");
  const prevButton = carousel.querySelector(".prev-button");
  let currentIndex = 0;

  // Function to show a specific card
  function showCard(index) {
    cards.forEach((card) => card.classList.remove("active"));
    cards[index].classList.add("active");
  }

  // Add event listeners scoped to this carousel's buttons
  if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length; // Loop to the start
      showCard(currentIndex);
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to the end
      showCard(currentIndex);
    });
  }

  // Show the first card initially
  showCard(currentIndex);
});


// // Carousel 1
// const cardsCarousel1 = document.querySelectorAll(".carousel-1 .card");
// let currentIndexCarousel1 = 0;

// document.querySelector(".next-button-carousel-1").addEventListener("click", () => {
//   currentIndexCarousel1 = (currentIndexCarousel1 + 1) % cardsCarousel1.length;
//   updateActiveCard(cardsCarousel1, currentIndexCarousel1);
// });

// document.querySelector(".prev-button-carousel-1").addEventListener("click", () => {
//   currentIndexCarousel1 = (currentIndexCarousel1 - 1 + cardsCarousel1.length) % cardsCarousel1.length;
//   updateActiveCard(cardsCarousel1, currentIndexCarousel1);
// });

// // Carousel 2
// const cardsCarousel2 = document.querySelectorAll(".carousel-2 .card");
// let currentIndexCarousel2 = 0;

// document.querySelector(".next-button-carousel-2").addEventListener("click", () => {
//   currentIndexCarousel2 = (currentIndexCarousel2 + 1) % cardsCarousel2.length;
//   updateActiveCard(cardsCarousel2, currentIndexCarousel2);
// });

// document.querySelector(".prev-button-carousel-2").addEventListener("click", () => {
//   currentIndexCarousel2 = (currentIndexCarousel2 - 1 + cardsCarousel2.length) % cardsCarousel2.length;
//   updateActiveCard(cardsCarousel2, currentIndexCarousel2);
// });

// // Function to update active card
// function updateActiveCard(cards, index) {
//   cards.forEach((card) => card.classList.remove("active"));
//   cards[index].classList.add("active");
// }





// document.querySelectorAll(".project-visuals.carousel").forEach((carousel) => {
//   const cards = carousel.querySelectorAll(".card");
//   const nextButton = carousel.querySelector(".next-button");
//   const prevButton = carousel.querySelector(".prev-button");
//   let currentIndex = 0;
//   let isTransitioning = false;

//   function debounce(callback, delay) {
//     if (isTransitioning) return;
//     isTransitioning = true;
//     callback();
//     setTimeout(() => (isTransitioning = false), delay);
//   }

//   function showCard(index) {
//     cards.forEach((card) => card.classList.remove("active"));
//     cards[index].classList.add("active");
//   }

//   nextButton.addEventListener("click", () => {
//     debounce(() => {
//       currentIndex = (currentIndex + 1) % cards.length;
//       showCard(currentIndex);
//     }, 500);
//   });

//   prevButton.addEventListener("click", () => {
//     debounce(() => {
//       currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//       showCard(currentIndex);
//     }, 500);
//   });

//   showCard(currentIndex);
// });


// const cards = document.querySelectorAll(".card");
// let currentIndex = 0;

// function showCard(index) {
//   // Remove the "active" class from all cards
//   cards.forEach((card, i) => {
//     card.classList.remove("active");
//   });

//   // Add the "active" class to the target card
//   cards[index].classList.add("active");
// }

// document.querySelector(".next-button").addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % cards.length; // Loop back to the start
//   showCard(currentIndex);
// });

// document.querySelector(".prev-button").addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to the end
//   showCard(currentIndex);
// });