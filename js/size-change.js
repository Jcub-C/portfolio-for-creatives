$(document).ready(function () {
  const overlay1 = $(".portfolioPiece1");
  const overlay2 = $(".portfolioPiece2");
  const overlay3 = $(".portfolioPiece3");

  // Hover event for Project Title 1
  $("#project-title-1").hover(function () {
    console.log("hover 1 work");
    overlay2.fadeOut(500);
    overlay3.fadeOut(500);
    overlay1.fadeIn(500);
  });

  // Hover event for Project Title 2
  $("#project-title-2").hover(function () {
    console.log("hover 2 work");
    overlay1.fadeOut(500);
    overlay3.fadeOut(500);
    overlay2.fadeIn(500);
  });

  // Hover event for Project Title 3
  $("#project-title-3").hover(function () {
    console.log("hover 3 work");
    overlay1.fadeOut(500);
    overlay2.fadeOut(500);
    overlay3.fadeIn(500);
  });
});