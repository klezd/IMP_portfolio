

function addALine(input) {
    /*var li = document.createElement("li");
    li.setAttribute("class", "list-item");*/
    var output = document.getElementById("nameList");

    var li = createAElement("li", "list-item");
    //create close button
    var close = createAElement("span", "remove");
    close.setAttribute("onclick", "remove(this)");
    close.appendChild(document.createTextNode("remove"));
    //add value and close button to line
    li.appendChild(document.createTextNode(input));
    li.appendChild(close);
    //add line
    output.appendChild(li);
}

