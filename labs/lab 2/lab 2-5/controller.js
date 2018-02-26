/* ******first version
var addPersonModel = new peopleListModel();

function addPerson() {
  //get field to show list to => ul tag
  var list = document.getElementById("nameList");
  //get value input
  var personToBeAdded = document.getElementById("inputField");
  if (personToBeAdded.value === '') {
    alert("You must write a person's name here!");
  } else {
    //create li tag in the ul list
    var li = document.createElement("li");
    li.setAttribute("class", "list-item");
    //add the value to li
    li.appendChild(document.createTextNode(personToBeAdded.value));
    list.appendChild(li);
    //set the input value to "" like origin
    personToBeAdded.value = "";
    //create the remove button
    var remove = document.createElement("span");
    remove.setAttribute("class", "remove");
    remove.appendChild(document.createTextNode("remove"));
    //add the remove btn to li
    li.appendChild(remove);
  }
  //remove from list
  var removeBut = document.getElementsByClassName("remove");
  var i;
  for (i = 0; i < removeBut.length; i++) {
    removeBut[i].on("click", function() {
      console.log("removed");
      var div = this.parentElement;
      div.style.display = "none";
    })
  }
}
*/

//with MVC format

function addToList() {
  var userInput = document.getElementById("inputField");
  var output = document.getElementById("nameList");

    if (userInput.value != "") {
        // add line to list on html file
        addALine(userInput, output);
        userInput.value = "";
    } else {
        alert("Text something");
    }
}
