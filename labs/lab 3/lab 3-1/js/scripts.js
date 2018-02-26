var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');
/*
// When the connection is open, send some data to the server
connection.onopen = function () {
    connection.send('Ping'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
    console.log('Server: ' + e.data);
};
*/
/* ******Note***********
connection.onmessage = function(message) {console.log(message.data);} // display on screen
connection.readyState; // check for status
connection.send("text"); // send "text"

*/

connection.onopen = function () {
  var status = document.getElementById("status");
  console.log("open");
  status.innerHTML = "CONNECT SUCCESSFULLY" ;
};

connection.onerror = function () {
  var status = document.getElementById("status");
  console.log("error");
  status.innerHTML = "CANNOT CONNECT" ;
};

connection.onclose = function () {
  var status = document.getElementById("status");
  console.log("close");
  status.innerHTML = "CONNECTION HAS CLOSED" ;
};

$("a#sendButton").click(function(event) {
  event.preventDefault();
})
/* send msg by press Send button*/
function send() {

  var messageToBeSent = document.getElementById("inputChat");
  if (messageToBeSent.value == '') {
    window.alert("Enter some text!");
  } else {
    connection.send(messageToBeSent.value);
  }
  messageToBeSent.value = "";
}
/*send message by pressing Enter key*/
function enter(event) {
  var messageToBeSent = document.getElementById("inputChat");
  var i = event.keyCode;
  if (i == 13)
  {
    if(messageToBeSent.value == '')
    {
      alert("Enter some text");
    } else {
      connection.send(messageToBeSent.value);
    }
  } else {
    return false;
  }
  messageToBeSent.value = "";
}

function WebSocketTest() {
  var chatBox = document.getElementById("myChatBox");
  connection.onmessage = function(message) {
    console.log(chatBox.innerHTML += "<br>" + "-----" + message.data);
  }
}
