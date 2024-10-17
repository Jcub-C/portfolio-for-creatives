let blue = "#2167db";
let yellow = "#feda29";
let white = "#fff";

function changeLogoColor() {
  // Function to change CSS variables for the logo
  function updateCSSVariables() {
    document.documentElement.style.setProperty("--outline", "red"); // change outline color
    document.documentElement.style.setProperty("--skin", "pink"); // change skin color
    document.documentElement.style.setProperty("--teeth", "purple"); // change teeth color
  }

  // Update variables for both static and animated SVGs
  updateCSSVariables();

  // Transition effect (optional)
  const rootElement = document.documentElement;
  rootElement.style.transition = "all 0.5s ease";
}

function changeLogoColorBack() {
  // Get the object element
  const svgAnimation = document.getElementById("svgAnimated");

  // Function to change the colors inside an SVG object
  function changeColors(svgObject) {
    const svgDoc = svgObject.contentDocument;
    if (!svgDoc) return; // Skip if the object is not yet loaded

    // Select elements by class and change their colors
    const blueElements = svgDoc.querySelectorAll(".blue");
    const yellowElements = svgDoc.querySelectorAll(".yellow");
    const whiteElements = svgDoc.querySelectorAll(".white");

    // change colors
    blue = "#2167db";
    yellow = "#feda29";
    white = "#fff";

    // Apply CSS transition for easing
    blueElements.forEach((element) => {
      element.style.transition = "fill 0.5s ease";
      element.setAttribute("fill", blue);
    });

    yellowElements.forEach((element) => {
      element.style.transition = "fill 0.5s ease";
      element.setAttribute("fill", yellow);
    });

    whiteElements.forEach((element) => {
      element.style.transition = "fill 0.5s ease";
      element.setAttribute("fill", white);
    });
  }

  // Wait for the SVG object to load and then change the colors
  svgAnimation.addEventListener("load", () => changeColors(svgAnimation));

  // If it's already loaded, trigger the color change immediately
  changeColors(svgAnimation);
}
