let $overLay = $("<div id='overlay'></div>");

$("body").append($overLay);
let $image = $("<img>");

$overLay.append($image);
let $close = $("<img id='closeImage'>");

$overLay.append($close);

$("#imageGallery a").click(function(event) {
  event.preventDefault();

  let imageSource = $(this).attr("href");
  $image.attr("src", imageSource);
  $close.attr("src", "images/close.png");

  $overLay.show();
});
