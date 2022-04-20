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
    setAlarm:{
        text:behindPlayer.name+" decides to set the alarm"
    },
    fallAsleep:{
        
    },

    getUp: {
        text: "You get up begrudgingly, and waddle over to the center of your room. It's time to start your day.",
        options:[["Shower", "behindSL.shower"], ["Dress for Work", "behindSL.dress"], ["Brush Teeth", "brushTeeth"], ["Begin the Day", "behindSL.begin"]]},
    begin: {
        text:"Are you sure you want to go outside?",
        options: [["Correct", "behindSL.continue"], ["Go Back", "behindSL.return"]]},
    return:{
        text:"You walk back into the place you call home and question how you might have forgotten such important parts of the morning.",
        options:[["Shower", "behindSL.shower"], ["Dress for Work", "behindSL.dress"], ["Brush Teeth", "brushTeeth"], ["Begin the Day", "behindSL.begin"]]},

    continue:{
        text:behindPlayer.name+" walks to the front door and steps outside only to fall straight through the front patio. There is no real amount of time " +behindPlayer.name+" falls for an indescriminate amount of time before passing out.",
        options:[["Walk around the building","behindSL.walk"],["Call out for help", "behindSL.call"], ["Search for an exit", "behindSL.searchExit"]]
    }


    }
    
;

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
