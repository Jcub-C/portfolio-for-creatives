$(document).ready(function () {
  const overlay1 = $(".portfolioPiece1");
  const overlay2 = $(".portfolioPiece2");
  const overlay3 = $(".portfolioPiece3");
  const overlay4 = $(".portfolioPiece4");
  const portfolioLink = $(".portfolio a");

  // Project 1
  $("#project-title-1").hover(function () {
    console.log("hover 1 work");
    overlay2.fadeOut(500);
    overlay3.fadeOut(500);
    overlay4.fadeOut(500);
    overlay1.fadeIn(500);
    portfolioLink.attr("href", "30-30.html");
  });

  // Project 2
  $("#project-title-2").hover(function () {
    console.log("hover 2 work");
    overlay1.fadeOut(500);
    overlay3.fadeOut(500);
    overlay4.fadeOut(500);
    overlay2.fadeIn(500);
    portfolioLink.attr("href", "susan-rodgers.html");
  });

  // Project 3
  $("#project-title-3").hover(function () {
    console.log("hover 3 work");
    overlay1.fadeOut(500);
    overlay2.fadeOut(500);
    overlay4.fadeOut(500);
    overlay3.fadeIn(500);
    portfolioLink.attr("href", "lil-wood-diner.html");
  });

  // Project 4
  $("#project-title-4").hover(function () {
    console.log("hover 4 work");
    overlay1.fadeOut(500);
    overlay2.fadeOut(500);
    overlay3.fadeOut(500);
    overlay4.fadeIn(500);
    portfolioLink.attr("href", "last-minute.html");
  });
});

