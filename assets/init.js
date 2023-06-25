console.log("dark mode");

$(document).ready(function () {
  //------------------------------------
  // show hide each itme
  //------------------------------------

  $(".item").click(function () {
    $(this).toggleClass("active");
  });

  //---------------------------
  // setup show hide all button
  //---------------------------
  $("#showhide").click(function () {
    $(".item").toggleClass("active");
  });

  //------------------------------------
  // adds a a darkmode class to the body
  //------------------------------------
  $("#darkmode").click(function () {
    $("body").toggleClass("darkmode");
  });

  const darkModeButton = document.getElementById("darkmode");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");

  let clickCount = 0;

  darkModeButton.addEventListener("click", function () {
    clickCount++;

    if (clickCount % 2 === 1) {
      image1.style.display = "block";
      image2.style.display = "none";
    } else {
      image1.style.display = "none";
      image2.style.display = "block";
    }
  });
});
