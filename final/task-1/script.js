$(document).ready(function () {
  let i = 1;
  $("button").click(function () {
    if (i) {
      $("h1, h2, p").addClass("italic");
    } else {
      $("h1, h2, p").removeClass("italic");
    }
    i = 1 - i;
  });
});
