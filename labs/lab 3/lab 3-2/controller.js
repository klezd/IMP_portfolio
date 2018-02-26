function addToList() {
    var userInput = document.getElementById("inputField");

    if (userInput.value != "") {
        //check if storage has that item, only once when reload page
        //if yes, pull down and imigrate to listOfPeople
        //if not, nothing happen
        checkOnce();
        // add to array
        listOfPeople.addPerson(userInput.value);
        // TODO store data to local storage array
        toStorage(listOfPeople);
        // TODO update to show to html / show data from storage
        showData();
        // TODO show to html
        //addALine(userInput, output);
        // empty the input field
        userInput.value = "";
    } else {
        alert("Text something");
    }
}

//delete one line
function remove(val) {
    var thisLine = val.parentElement; // return li element
    var valueRaw = thisLine.textContent; // return text content inside li element with 'remove'
    var value = valueRaw.replace("remove","");
    var index = listOfPeople.allPeople.indexOf(value);// find index of that value in the array
    // delete in session array
    if (index !== -1) {
        listOfPeople.allPeople.splice(index, 1);
    }
    toStorage(listOfPeople);
    showData();
}