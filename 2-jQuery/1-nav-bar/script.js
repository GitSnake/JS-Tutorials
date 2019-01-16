let $select = $(<select></select>);

$("#mainmenu").append($select);

$("#mainmenu a").each(function(){
  let $option = $("<option></option>");
  $option.val($(this).attr("href"));
});
