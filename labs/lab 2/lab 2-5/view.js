function addALine(userInput, output) {
    /*var li = document.createElement("li");
    li.setAttribute("class", "list-item");*/
    var li = createAElement("li", "list-item");
    //create close button
    var close = createAElement("span", "remove");
    console.log(li + " " + close);
    close.setAttribute("onclick", "remove(this)");
    close.appendChild(document.createTextNode("remove"));
    //add value and close button to line
    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(close);
    //add line
    output.appendChild(li);
}
