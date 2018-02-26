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
    remove.setAttribute("onclick", "remove(this)");
    remove.appendChild(document.createTextNode("remove"));
    //add the remove btn to li
    li.appendChild(remove);
  }
}

function remove(x) {
    console.log(x);
    var name = x.parentElement;
    console.log(name);
    name.style.display = "none";
}