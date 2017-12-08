// Code excerpts from: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
// https://www.w3schools.com/howto/howto_js_todolist.asp

//Function that marks the sidebar elements as done
var start_delay = 1000;
var delay = 10000//10000;//30000;
var stage = 0;
var pwd_delay = 4000;
var blank_delay = 4000;
var pre_text_delay = 3000;
var cmsg_delay = 5000;

//Think Passthought delay to 5 seconds
var think_delay = 8000


//Think Passthought delay to 5 seconds
var auth_delay = 8000

var instr_url1 = "When you see the words BLINK, please do so for 30 seconds"
var instr_url2 = "step2_pretext"//"https://www.youtube.com/embed/81eRBN6o6Ic"
var instr_url3 = "step3_pretext"//"https://www.youtube.com/embed/4-m-QqKaZ08"
var closingmsg = "Thank you for participating in this experiment. Goodbye!"
var http = new XMLHttpRequest();
var base_url = "sendmsg/"

function check(elem){$(elem).addClass('checked');}
function appendElement(nodeType, text,parentID,elementID){
    var para = document.createElement(nodeType,);
    var node = document.createTextNode(text);
    para.appendChild(node);
    para.setAttribute('id', elementID)
    var element = document.getElementById(parentID);
    element.appendChild(para);
}

function removeClassElements(classname)
{
    var paras = document.getElementsByClassName(classname);

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);}
    }



function DisplayTextAndSaveTime(msg){
    if(msg == ''){var url = base_url.concat("BLANK","/");}
    else{
        //Strip out all spaces and special characters from msg before sending it
        m = msg.replace(/[^a-zA-Z]/g, "");
        var url = base_url.concat(m,"/");}
    
    //http.open("GET", url, false);// false for synchronous request
    //http.send( null );
    //console.log(http.responseText);

    document.getElementById("instructions").innerHTML = msg;
    //appendElement("h1",msg,"instructions",'theInstructions' )

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
    document.getElementById("playtext").innerHTML = closingmsg;
    // document.getElementById("play").style.display= "inline";
}
function display_next_instructions(url){
    setTimeout(function(){
        displayText2('',0);
        document.getElementById(url).style.display= "inline";

        setTimeout(function (){
                    document.getElementById("proceed").disabled = false;
                    },start_delay)



    },pre_text_delay);

}

function completeStep(url,d,c){
        setTimeout(function (){
            check(c);


            if(url != 0){
                display_next_instructions(url);
                
                }
            else{
                setTimeout(function (){babyphoto();},5);
            }

        },d);    
}



function calibrate(){
    console.log("Calibrating .....")
    displayText2('BLINK',0);
    displayText2('Calibration Complete!!!',delay);
    completeStep(instr_url2,delay,"#Calibration")

}

function setPassthought(){

    displayText2('Think Passthought',0);

    displayText2('',(delay*1)+(blank_delay*0));

    displayText2('Think Passthought',(delay*1)+(blank_delay*1));

    displayText2('',(delay*2)+(blank_delay*1));

    displayText2('Think Passthought',(delay*2)+(blank_delay*2));
    displayText2('You have successfully set your Passthought!!!',(delay*3)+(blank_delay*2));
    completeStep(instr_url3,(delay*3)+(blank_delay*2),"#Passthought_Setting");
}


function login(){

    displayText2('Think Passthought to Aunthenticate (1)',0);
    displayText2('Classifying......',(auth_delay*1)+(pwd_delay*0) + (cmsg_delay*0));
    displayText2('Authentication Failed',(auth_delay*1)+(pwd_delay*0)+ (cmsg_delay*1));
    
    displayText2('Think Passthought to Aunthenticate (2)',(auth_delay*1)+(pwd_delay*1)+ (cmsg_delay*1));
    displayText2('Classifying......',(auth_delay*2)+(pwd_delay*1) + (cmsg_delay*1));
    displayText2('Authentication Failed',(auth_delay*2)+(pwd_delay*1)+ (cmsg_delay*2));

    displayText2('Think Passthought to Aunthenticate (3)',(auth_delay*2)+(pwd_delay*2) + (cmsg_delay*2));
    displayText2('Classifying......',(auth_delay*3)+(pwd_delay*2) + (cmsg_delay*2));
    displayText2('Authentication Failed',(auth_delay*3)+(pwd_delay*2)+ (cmsg_delay*3));

  
    displayText2('Think Passthought to Aunthenticate (4)',(auth_delay*3)+(pwd_delay*3)+ (cmsg_delay*3));
    displayText2('Classifying......',(auth_delay*4)+(pwd_delay*3) + (cmsg_delay*3));
    displayText2('Authentication Failed',(auth_delay*4)+(pwd_delay*3)+ (cmsg_delay*4));

    displayText2('Sorry!! Your authentication has failed!!!',(auth_delay*4)+(pwd_delay*3)+ (cmsg_delay*4)+start_delay);

    completeStep(0,(auth_delay*4)+(pwd_delay*3)+(cmsg_delay*4)+start_delay,"#Login");

};



function proceed(){
    document.getElementById("play").style.display= "none";
    document.getElementById("proceed").disabled = true;
    //remove pre-text if any
    

    if(stage == 0){ 
        removeClassElements('pre_text');
        calibrate();stage = 1;}
    else if(stage == 1){ 
        removeClassElements('pretext2');
        setPassthought(); stage = 2;}
    else if (stage == 2){
        removeClassElements('pretext3');
        login();}
    else{

        console.log('error');
    }
}


//Populate Starter Charts
$(document).ready(function () {

    $('.proceedbutton_class').data("stage",stage);    
    $('.proceedbutton_class').on('click', proceed);

});






