   bag.style.display = 'none';

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

//Main Story Variable

let behindSL = {

    characterConfirm: {
        text: "Your name is " + behindPlayer.name + " correct?",
        applicationCheck: [
            []
        ],
        options: [
            ["Correct", "behindSL.area1Open"]
        ]
    },

    area1Open: {
        text: "You are awoken to the sound of a loud, blaring alarm beside your bed. As your eyes adjust from slumber, you roll over and smack the top of the alarm silencing it. The time reads " + behindAlarm.time + " in bright red digital lettering before it dims slighlty as bright morning light shines through the curtains glistening into your bedroom...",
        options: [["Get Up","behindSL.getUp"], ["Set Alarm", "behindSL.setAlarm"], ["Fall Asleep", "behindSL.fallAsleep"]],
    },
};

//Story Page
let behindPage = document.getElementById('enterName'),
    behindData = behindPage.elements;

console.log(behindData);

//Related variables
let moveArea = behindSL.characterConfirm;
let moveSwitch = document.getElementById("moveSwitch");
var behindBranches = ["behindSL"];
let behindNameStored = false;

function nextArea(place) {
    moveArea = place;
}

//Construct function and other functions
function behindNameConstruct(place) {
    let message = '<p name ="playerName"></p><p class = "behindStory">'+ place.text +'</p><ul>'
    for (i = 0; i < place.options.length; i++) {
        message += '<button class= behindOptions type="submit" onclick="nextArea(' + place.options[i][1] + ')">' + place.options[i][0] + '</button>'
    }
    for (i=0; i < message.length-6; i++) {
        if (message.substring(i,i+6)=="player") {
            message = message.replace("player", behindPlayer.name);
            message +='<ul>'
        }
    }
    return message;
}

function statusUpdate() {
    statsDiv = getElementsById("stats");
    statsDiv.innerHTML = behindData;
}

function behindDataY(event) {
    if (behindNameStored == false) {
      let behindTextStored = behindData['playerName'].value;
      let output = document.getElementById('output');
      behindPlayer.name = behindTextStored;
      behindNameStored = true;
        }

output.innerHTML = `${behindNameConstruct(moveArea)}`;

console.log(behindPlayer);

event.preventDefault();

    }

behindPage.addEventListener('submit', behindDataY);
