 function spawnNotification(theBody,theIcon,theTitle) {
      
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
  setTimeout(n.close.bind(n), 5000); 
}
 spawnNotification("poop", "https://tebahpla.github.io/stuff/chat/ooglechaticon.png", "Oogle Chat Message"); 
