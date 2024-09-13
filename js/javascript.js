document.getElementById("menu-toggle").addEventListener("change", function () {
  const menu = document.querySelector(".menu");
  if (this.checked) {
    menu.style.display = "flex"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
});
