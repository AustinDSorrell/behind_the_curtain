window.onload = function(){

let behindPlayer = {
    name: "player",
    status: "affliction",
    sanity: "mental",
    inventory: "space",
    choices: []
};

function nextArea(place) {
    moveArea = place;
}

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
//Main Story

    var behindSL = {

        area1Open: {

        }
    }
}