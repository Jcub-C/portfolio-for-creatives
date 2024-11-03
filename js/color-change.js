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

// Function to load color mode from local storage on page load
function loadColorMode() {
  // Get saved color mode from local storage, or default to 0 (dark mode)
  color = parseInt(localStorage.getItem("colorMode")) || 0;
  applyColorMode();
}

// Call loadColorMode when the page loads
window.addEventListener("DOMContentLoaded", () => {
  loadColorMode();

  // After initial load, add smooth transitions to color changes
  const style = document.createElement("style");
  style.innerHTML = `
      * {
          transition: background-color 0.5s ease;
      }
  `;
  document.head.appendChild(style);
});

function changeLogoColor() {
  // Function to change CSS variables for dark mode
  document.documentElement.style.setProperty("--outline", "var(--blue1)");
  document.documentElement.style.setProperty("--bg-color", "var(--dark)");
  document.documentElement.style.setProperty("--bg-color2", "var(--dark-grey)");
  document.documentElement.style.setProperty("--text-color", "var(--light-grey)");
  document.documentElement.style.setProperty("--primary-color", "var(--yellow1)");
  document.documentElement.style.setProperty("--secondary-color", "var(--blue2)");
  document.documentElement.style.setProperty("--link-color", "var(--yellow2)");
}

function changeLogoColorBack() {
  // Function to change CSS variables for light mode
  document.documentElement.style.setProperty("--outline", "var(--blue1)");
  document.documentElement.style.setProperty("--bg-color", "var(--light)");
  document.documentElement.style.setProperty("--bg-color2", "var(--light-grey)");
  document.documentElement.style.setProperty("--text-color", "var(--dark)");
  document.documentElement.style.setProperty("--primary-color", "var(--blue1)");
  document.documentElement.style.setProperty("--secondary-color", "var(--yellow1)");
}

// Explanation of the new parts:

// `changeColor`: toggles color mode and saves it in `localStorage`.
// `loadColorMode`: retrieves saved color mode on page load and applies it.
// `applyColorMode`: switches the styles based on the current `color` value.
