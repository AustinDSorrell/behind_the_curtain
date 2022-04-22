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
            ["Correct", "behindSL.area1Open"], ["Incorrect", "behindSL"]
        ]
    },
    area1Open: {
        text: "You are awoken to the sound of a loud, blaring alarm beside your bed. As your eyes adjust from slumber, you roll over and smack the top of the alarm silencing it. The time reads " + behindAlarm.time + " in bright red digital lettering before it dims slighlty as bright morning light shines through the curtains glistening into your bedroom...",
        options: [["Get Up","behindSL.getUp"], ["Set Alarm", "behindSL.setAlarm"], ["Fall Asleep", "behindSL.fallAsleep"]],
    },
    setAlarm:{
        text:"You decide to set the alarm. What time do you choose?",
    },
    fallAsleep:{
        text: "You decide to fall back asleep. Why bother going outside anyway? You're much safer inside your home than anywhere else. You close your eyes and sleep. When you awake, you find that your room is uncomfortably pitchblack and dark. You flip on the side of your lamp and attempt to turn it on. It flickers but dies in a matter of seconds, as if the light itself is being consumed by the abyss. You begin to survey your now void like surroundings attentively. But are startled by a sudden and obnoxiously loud banging on the otherside of your bedroom window. Why someone would be knocking on your window this late at night is unknown, but is concerning none the less.",
        options:[["Look Through Window", "behindSL.lookOutWindow"], ["Scream In Fear", "behindSL.scream"]]
    },
    lookOutWindow:{
        text: "You notice an abyss black void outside with no signs of light or life. A monstrous hallucinogenic entity with a mischievous smile fades in and appears in the window amidst the darkness. The horrifying sight ripples fear throughout your entire soul. As the creature begins to become more...identifyable. The window shatters with an abrupt force. The creature begins laughing demonically, as if its purpose is to taunt you as you feel your feet being lifted off the ground and your throat begins to tighten. Demonic laughter in varying pitches echoes throughout all while the darkness begins to darken more and more. You're weeps for help and attempts of gasps of air are futile, and as you feel your brain's last few moments of cogniztion fade. The only thing you could possibly think of in your last moments is that creature's demonic laugh that came straight from hell itself.. Ending - Tormented",
        options:[["Rise Again"]]
    },
    scream:{
        text: "You let out an excurtiating sounding roar and as you do, you begin hearing loud footsteps approach the bedroom door. Silence appears for a few seconds before the door swings forcefully revealing a being of faded darkness with what seems like a mischievous demonic smile. You begin to feel your throat tighten and dry up. Demonic laughter in varying pitches echoes throughout the room, all while the darkness begins fill your vison more and more. Everything is cold. Your weeps for help and gasps of air are futile, and as you feel your brain's last few moments of cogniztion fade. The only thing you could possibly think of in your last moments is that creature's demonic laugh that came straight from hell itself. Ending - Intruder Alert",
        options:[["Rise Again"]]
    },
    getUp: {
        text: "You get up begrudgingly, and waddle over to the center of your room. It's time to start your day.",
        options:[["Shower", "behindSL.shower"], ["Dress for Work", "behindSL.dress"], ["Brush Teeth", "brushTeeth"], ["Begin the Day", "behindSL.begin"]]},
    begin: {
        text:"Are you sure you want to go outside?",
        options: [["Yes.", "behindSL.continue"], ["No.", "behindSL.return"]]},
    return:{
        text:"You walk back into the place you call home and question how you might have forgotten such important parts of the morning.",
        options:[["Shower", "behindSL.shower"], ["Dress for Work", "behindSL.dress"], ["Brush Teeth", "brushTeeth"], ["Begin the Day", "behindSL.begin"]]},

        //--------------------------------------\\
        //-------------Area 2: Level0------------\\
        //---------------------------------------\\


    continue:{
        text:"you walk to the front door and steps outside only to fall straight through the front patio. There is no real amount of time you fall for an indescriminate amount of time before passing out.",
        options:[["Walk around the building","behindSL.walk"],["Call out for help", "behindSL.call"], ["Search for an exit", "behindSL.searchExit"]]
    },
    walk:{
        text:"You walk around and explore the general area. You pick random areas to follow, take some turns that lead to a dead-end, and find a hallway that looks like it goes straight for miles. You begin to notice that the lights sound significantly louder than before.",
        options:[["Continue Down Hallway","behindSL.hallway"],["Damage a random wall", "behindSL.damage"]]
    },
    hallway:{
        text:"You walk down the hallway in front of you, after walking for what seems like an eternity. You realize you've come full circle, ending up at the exact place you started. You never made any turns and the hum of lights is deafeningly loud at this point. Your vision blurs and begins to haze from light headedness.",
        options:[["Search for an exit", "behindSL.searchExit"]["Call for help", "behindSL.call"]]

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
