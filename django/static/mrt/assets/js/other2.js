// Code excerpts from: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
// https://www.w3schools.com/howto/howto_js_todolist.asp

//Function that marks the sidebar elements as done
var start_delay = 300
var delay_increments = 2
var always_reject = 1
var json_data = {
   table: []
};


function check(elem){$(elem).addClass('checked');}

function completeExp(){
    var json = JSON.stringify(json_data);
    
       var txtFile = "Users/monicah/Desktop/test.txt";
       var file = new File(txtFile,"write");
       var str = JSON.stringify(json);

       log("opening file...");
       file.open(); 
       log("writing file..");
       file.writeline(str);
       file.close();
}
function login(a_r,d){
    console.log('a_r is: '+String(a_r))
    setTimeout(function(){
        displayText('Think Passthought to Aunthenticate',d,0,3,a_r);  
        if(a_r == 1){
            var i=0;
            var max_tries =3
            while (i < max_tries) {
                displayText('Error\n\nTry Again! '+ 'Tries left: ' +String(max_tries -i),d*i,0,3,a_r);
                i++;
                // console.log(i);
            }
            displayText('Authentication Failed',d*max_tries,1,3,a_r);
            completeExp();


        }

        if(a_r == 0){
            displayText('Authenticated',d+start_delay,1,3,a_r);
            completeExp();
        }






    }, start_delay);

};
function babyphoto(x){
    if(x == 1){var src = "/static/mrt/assets/images/baby_cry.jpg"}
        else{ var src = "/static/mrt/assets/images/baby.jpg"}
    var elem = document.createElement("img");
    elem.setAttribute("src", src);
    // elem.setAttribute("height", "768");
    // elem.setAttribute("width", "1024");
    elem.setAttribute("alt", "baby");
    document.getElementById("instructions").appendChild(elem);
}

function setPassthought(a_r){
    displayText('Think Passthought',0,0,2,a_r);

    setTimeout(function(){ 
        start_delay =start_delay + start_delay;
        displayText('Think Passthought Again',start_delay, 0,2,a_r);

        start_delay =start_delay + start_delay;
        displayText('Think Passthought one last time',start_delay, 1,2,a_r);
    })    
}

function saveTime(msg){
    document.getElementById("instructions").innerHTML = msg;
    var time = JSON.stringify(new Date().getTime() / 1000);
    json_data.table.push({time: time, prompt:msg});

}


function displayText(msg,delay, complete,stage,a_r){

    setTimeout(function(){ 
        saveTime(msg)
        delay =delay 
        if(complete>0 && stage ==1){
            setTimeout(function(){check('#Calibration');alert('Calibration Complete!'); setPassthought(a_r);}, delay  );};
        if(complete>0 && stage == 2)
        {
            setTimeout(function(){check('#Passthought_Setting');alert('Passthought Successfully Set!'); login(a_r,delay);}, delay );};
    
        if(complete>0 && stage == 3 &&  a_r == 0){
            setTimeout(function(){check('#Login');alert('Login Successfully!!'); babyphoto(a_r);}, 0 );
        };

        if(complete>0 && stage == 3 &&  a_r == 1){
                setTimeout(function(){alert('Login Failed!!'); babyphoto(a_r);}, 0 );
            };

        }, delay);




}



function initialize(){
    console.log("initialize");
    displayText('Blink',0,0,1, always_reject);

    start_delay =start_delay + start_delay;
    displayText('Focus on your breathing!',start_delay, 0,1,always_reject);

    start_delay =start_delay + start_delay;
    displayText('Blink',start_delay, 0,1,always_reject)  ;


    start_delay =start_delay + start_delay;
    displayText('Focus on your breathing!',start_delay, 1,1,always_reject);


}


//Populate Starter Charts
$(document).ready(function () {
    $('.startbutton_class').on('click', initialize);
    // $('#Calibration').on('click', calibrate);
    // $('#Passthought_Setting').on('click', setPassthought);
    // $('#Login').on('click', login);


});







