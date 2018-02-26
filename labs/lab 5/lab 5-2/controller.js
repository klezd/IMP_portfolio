
$(document).ready(function() {

  $("#addNew").click(function() {
    //console.log("click");
    if ( $("#inputField").val() == "" ) {
      alert("You must write a person's name here!");
    } else {
      var li = document.createElement("li");
      var personToBeAdded = $("#inputField").val();
      //console.log(personToBeAdded);
      $(li).attr("class", "list-item");

      $(li).text($("#inputField").val());
      $("#nameList").append( $(li) );
      var remove = document.createElement("span");
      $(remove).attr("class", "remove");
      $(remove).click(function() {
        $(remove).parent().hide();
      });
      $(remove).text("remove");
      $(li).append( $(remove) );
      $("#inputField").val("");
    }
  })

});
