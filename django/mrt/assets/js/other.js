// Code excerpts from: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
// https://www.w3schools.com/howto/howto_js_todolist.asp

//Function that marks the sidebar elements as done
var start_delay = 3000
var delay_increments = 2

function check(elem){$(elem).addClass('checked');}
function displayText(msg,delay){
    setTimeout(function(){ 
        document.getElementById("instructions").innerHTML = msg;}, 
        delay
    );
}




function initialize(){
  console.log("initialize");
}

function calibrate(){
    start_delay =start_delay *delay_increments
    displayText('Blink',start_delay)

    start_delay =start_delay *delay_increments
    displayText('Focus on your breathing!',start_delay)

    start_delay =start_delay *delay_increments
    displayText('Blink',start_delay)  

    start_delay =start_delay *delay_increments
    displayText('Focus on your breathing!',start_delay)

    check('#Calibration');

}

function setPassthought(){
      check('#Passthought_Setting');

}

function login(){
  check('#Login');

}



//Populate Starter Charts
$(document).ready(function () {
    // $('.startbutton_class').on('click', initialize);
    // $('#Calibration').on('click', calibrate);
    // $('#Passthought_Setting').on('click', setPassthought);
    // $('#Login').on('click', login);
    initialize();
    calibrate();

});






