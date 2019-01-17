let $select = $(<select></select>);

$("#mainmenu").append($select);

$select.change(function() {
  window.location = $select.val();
});

$("#mainmenu a").each(function(){
  let $option = $("<option></option>");
  $option.val($(this).attr("href"));
  $option.text((this).text());

  if($(this).parent().hasClass("selected")) {
    $option.prop("selected", true);
  }

  $select.append($option);
});
