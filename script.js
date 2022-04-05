window.onload = function(){

let behindPlayer = {
    name: "player",
    status: "unafflicted",
    sanity: "sane",
    inventory: "empty",
    choices: []
};

let behindAlarm = {
    time:"10:28am",
};

function nextArea(place) {
    moveArea = place;
}

//Non-story related variables

var behindBranches = ["behindSL"];
let behindNameStored = false;
let behindPage = 

//Construct function and other functions

function areaConstruct(place) {
    let message = '<p name ="behindName"</p><p>'+ place.text+'</p>'
    for (i = 0; i < place.options.length; i++) {
        message += '<button type = "submit" onclick="nextArea ('+ place.options[i][1]+ ')">' + place.options[i][0] + '</button>'
    }
    for (i=0; i < message.length-6; i++) {
        if(message.substring(i,i+6)=="player"){
            message = message.replace("player", behindPlayer.name)
        }
    }
    return message;
}

function behindDataY(event) {

    if (behindNameStored == false) {
      let textName = gameData['playerName'].value;
      let output = document.getElementById('output');
      behindPlayer.name = textName;
      behindNameStored = true;
    }
}

bag.style.display = 'none'; //hides inventory

//Main Story Variable

    var behindSL = {

        area1Open: {
            text: "You are awoken to sound of a loud, blaring alarm beside your bed. You roll over and smack the top of the alarm silencing it. The time reads" + behindAlarm.time + "in bright red digital lettering before it dims slighlty. 'Time to get up I guess..",
            options: [["getUp","Get Up"], ["setAlarm", "Set Alarm"], ["fallAsleep", "Fall Asleep"]],
        }
    }
}