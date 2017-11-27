// Code excerpts from: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
// https://www.w3schools.com/howto/howto_js_todolist.asp


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  myNodelist[i].appendChild(span);
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

// Creating custom Events 
var event = new Event('build');

// Listen for the event.
list.addEventListener('build', function (ev) { 
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Dispatch the event.
list.dispatchEvent(event);

//Triggering built-in events
function simulateBuild(elem) {
  var event = new MouseEvent('build', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  var cb = document.getElementById(elem); 
  var cancelled = !cb.dispatchEvent(event);
  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    var msg = String(elem)+" Successful!!"
    alert(msg);
  }
}


simulateBuild('Calibration')
