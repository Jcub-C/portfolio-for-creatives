//nav menu//
document.getElementById("menu-toggle").addEventListener("change", function () {
  const menu = document.querySelector(".menu");
  if (this.checked) {
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
  } else {
    menu.style.opacity = "1";
    menu.style.visibility = "visible";
  }
});
