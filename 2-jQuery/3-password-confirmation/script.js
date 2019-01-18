$("form span").hide();

$("#password").keyup();
$("")

function isPassValid() {
  return $("#password").val().length > 6;
}
function isPassMatching(){
  return $("#confirm_password").val() === $("#password").val();
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
