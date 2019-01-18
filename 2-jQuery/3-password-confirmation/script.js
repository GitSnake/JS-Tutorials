$("form span").hide();

$("#password").keyup();

function isPassValid() {
  return $("#password").val().length() > 6;
}
