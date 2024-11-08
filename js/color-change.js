let color = 0;

// Function to apply color mode based on the value
function applyColorMode() {
  if (color === 1) {
    changeLogoColor();
    document.getElementById("colorChange").innerHTML = "Light Mode";
  } else {
    changeLogoColorBack();
    document.getElementById("colorChange").innerHTML = "Dark Mode";
  }
}

// Function to toggle and save color mode
function changeColor() {
  color = color === 0 ? 1 : 0;
  applyColorMode();

  // Save the current mode in local storage
  localStorage.setItem("colorMode", color);
}

// Function to load color mode from local storage or system preference on page load
function loadColorMode() {
  // Check if a color mode is saved in localStorage
  const savedColorMode = localStorage.getItem("colorMode");

  if (savedColorMode !== null) {
    // If a color mode is saved, use it
    color = parseInt(savedColorMode);
  } else {
    // If no saved color mode, check system preference
    color = window.matchMedia("(prefers-color-scheme: dark)").matches ? 1 : 0;
    // Save the initial color mode preference for future visits
    localStorage.setItem("colorMode", color);
  }

  applyColorMode();
}

// Call loadColorMode when the page loads
window.addEventListener("DOMContentLoaded", loadColorMode);

function changeLogoColor() {
  // Set CSS variables for dark mode
  document.documentElement.style.setProperty("--outline", "var(--blue1)");
  document.documentElement.style.setProperty("--bg-color", "var(--dark)");
  document.documentElement.style.setProperty("--bg-color2", "var(--dark-grey)");
  document.documentElement.style.setProperty(
    "--text-color",
    "var(--light-grey)"
  );
  document.documentElement.style.setProperty(
    "--primary-color",
    "var(--yellow1)"
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    "var(--blue2)"
  );
  document.documentElement.style.setProperty("--link-color", "var(--yellow2)");
}

function changeLogoColorBack() {
  // Set CSS variables for light mode
  document.documentElement.style.setProperty("--outline", "var(--blue1)");
  document.documentElement.style.setProperty("--bg-color", "var(--light)");
  document.documentElement.style.setProperty(
    "--bg-color2",
    "var(--light-grey)"
  );
  document.documentElement.style.setProperty("--text-color", "var(--dark)");
  document.documentElement.style.setProperty("--primary-color", "var(--blue1)");
  document.documentElement.style.setProperty(
    "--secondary-color",
    "var(--yellow1)"
  );
}
