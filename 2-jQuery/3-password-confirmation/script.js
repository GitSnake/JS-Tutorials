$("form span").hide();

$("#password").keyup();

function isPassValid() {
  return $("#password").val().length() > 6;
}
function errorMessageEvent() {
  if(isPassValid(){
    $(this).next().hide();
  }
  else{
    $(this).next().show();
  }
)
}
