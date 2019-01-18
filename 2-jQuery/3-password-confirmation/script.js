$("form span").hide();

$("#password").keyup();
$("#confirm_password").keyup(matchPass);

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
function matchPass() {
  if(isPassMatching()){
    $(this).next().hide();
  }
  else {
    $(this).next().show();
  }
}
function enableButton(){
  $("#submit").prop("disabled", "")
}
