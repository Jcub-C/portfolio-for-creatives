$("#project-title-1").hover(function () {
  $(".project-2-image").fadeOut(500);
  $(".project-3-image").fadeOut(500);
  $(".project-1-image").fadeIn(500);
});

$("#project-title-2").hover(function () {
  $(".project-1-image").fadeOut(500);
  $(".project-3-image").fadeOut(500);
  $(".project-2-image").fadeIn(500);
});

$("#project-title-3").hover(function () {
  $(".project-1-image").fadeOut(500);
  $(".project-2-image").fadeOut(500);
  $(".project-3-image").fadeIn(500);
});
