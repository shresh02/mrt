// Code excerpts from: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
// https://www.w3schools.com/howto/howto_js_todolist.asp

//Function that marks the sidebar elements as done
var start_delay = 300;
var delay = 2500;
var stage = -1;

var instr_url1 = "https://www.youtube.com/embed/LPb3aKmukt0"
var instr_url2 = "https://www.youtube.com/embed/81eRBN6o6Ic"
var instr_url3 = "https://www.youtube.com/embed/4-m-QqKaZ08"
var closingmsg = "Thank you for participating in this experiment. Goodbye!"
var http = new XMLHttpRequest();
var base_url = "sendmsg/"

function check(elem){$(elem).addClass('checked');}

function DisplayTextAndSaveTime(msg){
    if(msg == ''){var url = base_url.concat("BLANK","/");}
    else{var url = base_url.concat(msg,"/");}
    
    http.open("GET", url, false);// false for synchronous request
    http.send( null );
    console.log(http.responseText);

    document.getElementById("instructions").innerHTML = msg;

    var time = JSON.stringify(new Date().getTime() / 1000);
    console.log(time, msg);
    // json_data.table.push({time: time, prompt:msg});

}

function displayText2(msg,delay){

    setTimeout(function(){ 
        DisplayTextAndSaveTime(msg)
        delay =delay 

        }, delay);
}
function babyphoto(){
    document.getElementById("instructions").style.paddingTop = 0;
    document.getElementById("baby").style.display= "inline";
    document.getElementById("playtext").innerHTML = closingmsg;
    document.getElementById("play").style.display= "inline";
}

function completeStep(url,d,c){
        setTimeout(function (){
            check(c);
            displayText2('',0);


            if(url != 0){
                document.getElementById("calibration_instructions").src = url;//"inline";

                setTimeout(function (){
                    document.getElementById("calibration_instructions").style.display= "inline";
                    document.getElementById("play").style.display= "inline";
                    document.getElementById("proceed").disabled = false;
                    },delay);
                }
            else{
                setTimeout(function (){babyphoto();},5);
            }

        },d);    
}


function setup(){
    completeStep(instr_url1,start_delay,"#setup")
}

function calibrate(){
    console.log("Calibrating .....")
    document.getElementById("calibration_instructions").style.display= "none";
    displayText2('Blink',start_delay);

    start_delay =start_delay + delay;
    displayText2('Focus on your breathing!',start_delay);
    start_delay =start_delay + delay;
    displayText2('Calibration Complete!!!',start_delay);
    start_delay =start_delay + delay;

    completeStep(instr_url2,start_delay,"#Calibration")

}

function setPassthought(){
    document.getElementById("calibration_instructions").style.display= "none";//"inline";

    displayText2('Think Passthought',0);
    displayText2('Think Passthought Again',start_delay);
    start_delay =start_delay + delay;
    displayText2('Think Passthought one last time',start_delay);
    start_delay =start_delay + delay;
    displayText2('You have successfully set your Passthought!!!',start_delay);
    start_delay =start_delay + delay;
    completeStep(instr_url3,start_delay,"#Passthought_Setting");
}

function login(){
    document.getElementById("calibration_instructions").style.display= "none";//"inline";

    displayText2('Think Passthought to Aunthenticate',0);
    //start_delay =start_delay + delay;

    // Always Rejected Group
    var i=0;
    var max_tries =3
    while (i < max_tries) {
        start_delay = start_delay+i*delay
        displayText2('Error\n\nTry Again! Tries left: '+String(max_tries -i),start_delay);
        i++;
        // console.log(i);
    }
    start_delay =start_delay + delay;
    displayText2('Authentication Failed',start_delay);


    start_delay =start_delay + delay;
    completeStep(0,start_delay,"#Login");

};




function proceed(){
    //s =  $(this).data("stage");
    document.getElementById("play").style.display= "none";
    document.getElementById("proceed").disabled = true;

    if (stage == -1){ setup();stage = 0;}
    else if(stage == 0){ calibrate();stage = 1;}
    else if(stage == 1){ setPassthought(); stage = 2;}
    else if (stage == 2){login();}
    else{

        console.log('error');
    }
}


//Populate Starter Charts
$(document).ready(function () {

    $('.proceedbutton_class').data("stage",stage);    
    $('.proceedbutton_class').on('click', proceed);

});






