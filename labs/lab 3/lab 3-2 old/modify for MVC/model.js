//func create a new element with class name
function createAElement(x, className) {
    var ele = document.createElement(x);
    var attr = document.createAttribute("class");
    attr.value = className;
    ele.setAttributeNode(attr);
    return ele;
}

function peopleList() {
    this.allPeople = new Array();

    this.addPerson = function(person) {
        this.allPeople.push(person);
    }
}
//func to add to storage
function toStorage(input) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("peopleList", JSON.stringify(input));
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}
var listOfPeople = new peopleList();
var userInput = document.getElementById("inputField");

function showData() {
    checkOnce();
    if (typeof(Storage) !== "undefined") {
        //test if there is something storage
        //if true mean there is something in storage and now to be show
        if(localStorage.hasOwnProperty("peopleList")) {
            var peopleListStorage = JSON.parse(localStorage.getItem("peopleList")); // return object

            document.getElementById("nameList").innerHTML = "";
            console.log(peopleListStorage);
            console.log(listOfPeople);

            for (var i in peopleListStorage.allPeople) {
                addALine(peopleListStorage.allPeople[i]);
            }
        }
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

function checkOnce() {
    if (typeof(Storage) !== "undefined") {
        //test if there is something storage
        //if true mean there is something in storage and now to be show
        if(localStorage.hasOwnProperty("peopleList")) {
            var peopleListStorage = JSON.parse(localStorage.getItem("peopleList")); // return object

            for (var i in peopleListStorage.allPeople) {
                listOfPeople.addPerson(peopleListStorage.allPeople[i]);
            }
        }
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
    checkOnce = function(){};
}
