let $overLay = $("<div id='overlay'></div>");

$("body").append($overLay);
let $image = $("<img>");

$overLay.append($image);
let $close = $("<img id='closeImage'>");

$overLay.append($close);

$("#imageGallery a").click(function(event) {
  event.preventDefault();
});
