$(document).ready(function(){
  $("#projects").tabs();
  $("ul").sortable({axis:"x", containment:"#projects"});
  $("ol").sortable({axis:"y", containment:"#projects"});

  $("#btnAddProject").button()
  .click(function(){
    $("project-dialog").dialog(400, resizable:false, modal:true,
      buttons:{
        "Add new project":function(){
          // value of the text box
          let projectName = $("new-project").val();
          $("<li><a href='#" + projectName + "'>" + projectName + "</a></li>")
          .appendTo("#main");
        },
        "Cancel":function(){
          $("#new-project").val("");
          $(this).dialog("close");
        }
      });
    });
  });
