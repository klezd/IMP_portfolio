function createAElement(x, className) {
  var ele = document.createElement(x);
  var attr = document.createAttribute("class");
  attr.value = className;
  ele.setAttributeNode(attr);
  return ele;
}

function remove(x) {
  console.log(x);
  var name = x.parentElement;
  console.log(name);
  name.style.display = "none";
}