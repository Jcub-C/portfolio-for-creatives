let color = 0;

function changeColor() {
  if (color === 0) {
    changeLogoColor();
    color = 1;
    document.getElementById("colorChange").innerHTML="Light Mode";
  } else {
    changeLogoColorBack();
    color = 0;
    document.getElementById("colorChange").innerHTML="Dark Mode";

  }
}

function changeLogoColor() {
  //add transition to backgroun-color
  const style = document.createElement("style");
  // Add the CSS rule for the universal selector
  style.innerHTML = `
      * {
          transition: background-color 0.5s ease; /* Apply smooth transition to all properties */
      }
  `;
  // Append the style element to the document's head
  document.head.appendChild(style);

  // Function to change CSS variables for dark mode
  function updateCSSVariables() {
    document.documentElement.style.setProperty("--outline", "var(--blue1)"); // change logo blue
    document.documentElement.style.setProperty("--bg-color", "var(--dark)"); // change background
    document.documentElement.style.setProperty(
      "--bg-color2",
      "var(--dark-grey"
    ); // change background
    document.documentElement.style.setProperty(
      "--text-color",
      "var(--light-grey)"
    ); // change main text color
    document.documentElement.style.setProperty(
      "--primary-color",
      "var(--yellow1"
    ); // change primary color to yellow
    document.documentElement.style.setProperty(
      "--secondary-color",
      "var(--blue2"
    ); // change secondary color to blue
    document.documentElement.style.setProperty("--link-color", "var(--yellow2"); // change link color to dark yellow
  }

  // Update variables for both static and animated SVGs
  updateCSSVariables();
}

function changeLogoColorBack() {
  // Function to change CSS variables for the logo
  function updateCSSVariables() {
    document.documentElement.style.setProperty("--outline", "var(--blue1)"); // change logo blue
    document.documentElement.style.setProperty("--bg-color", "var(--light)"); // change background
    document.documentElement.style.setProperty(
      "--bg-color2",
      "var(--light-grey"
    ); // change background
    document.documentElement.style.setProperty("--text-color", "var(--dark)"); // change main text color
    document.documentElement.style.setProperty(
      "--primary-color",
      "var(--blue1"
    ); // change primary color to yellow
    document.documentElement.style.setProperty(
      "--secondary-color",
      "var(--yellow1"
    ); // change secondary color to yellow
  }

  // Update variables for both static and animated SVGs
  updateCSSVariables();
}
