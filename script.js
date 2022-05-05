bag.style.display = 'none'; //Inventory bag displayed as none until player picks up an item warranting an inventory.

let behindPlayer = { //Player object with properties.
    name: "player",
    status: "unafflicted",
    sanity: "sane",
    inventory: "empty",
    choices: [],
    clothes: "none",
};

let hydration = false

let behindFam = {
    name: "none"
}

let behindAlarm = { //Alarm object with properties.
    time:"||10:28 AM||",
};

let lvlZeroWall ={
    status:"normal",
};

//Main Story Variable

let behindSL = {

    characterConfirm: { //"place" variable.
        text: "Your name is " + behindPlayer.name + " correct?", //Text that goes with the place variable.
        options: [ //Options that go with the place variable
            ["Correct", "behindSL.area1Open"], ["Incorrect", "behindSL"] //Format: ["Button Name", "Next Place Variable"]
        ]
    },

    characterConfirmContinue: {
        text: "Do you want to continue with the name " + behindPlayer.name + "?", 
        options: [
            ["Yes", "behindSL.area1Open"], ["No", "behindSL"]
        ]
    },

    characterConfirmContinueNaked: {
        text: "Do you want to continue with the name " + behindPlayer.name + "?", 
        options: [
            ["Yes", "behindSL.area1OpenNaked"], ["No", "behindSL"]
        ]
    },

        //----------------------------------------\\
        //-------------Area 1: Bedroom------------\\
        //----------------------------------------\\

    area1Open: {
        text: "You are awoken to the sound of a loud, blaring alarm beside your bed. As your eyes adjust from slumber, you roll over and smack the top of the alarm silencing it. The time reads " + behindAlarm.time + " in bright red digital lettering before it dims slighlty as bright morning light shines through the curtains glistening into your bedroom...",
        options: [["Get Up","behindSL.getUp"], ["Skip Work", "behindSL.skipWork"], ["Fall Asleep", "behindSL.fallAsleep"]],
    },
    area1OpenNaked: {
        text: "You are awoken to the sound of a loud, blaring alarm beside your bed. As your eyes adjust from slumber, you roll over and smack the top of the alarm silencing it. The time reads " + behindAlarm.time + " in bright red digital lettering before it dims slighlty as bright morning light shines through the curtains glistening into your bedroom...",
        options: [["Get Up","behindSL.getUpNaked"], ["Skip Work", "behindSL.skipWork"], ["Fall Asleep", "behindSL.fallAsleep"]],
    },
    skipWork:{ 
        text:"After 3 minutes of not so considerate consideration, you decide to call in sick for work. You complained to your boss about ''rampant back pain'' and he sighs as the phone clicks and following dial tone is heard. He hung up.",
        options: [["Watch TV","behindSL.watchTV"], ["Party Time!", "behindSL.lvlFun"], ["Take a Nap", "behindSL.fallAsleep"]]
    },
    watchTV:{
        text: "After that delightlful conversation with you employer. You decide to kick back on the couch and turn on the TV.",
        options: [["Use Remote", "behindSL.remoteUse"]]
    },
    fallAsleep:{
        text: "You decide to fall back asleep. Why bother going outside anyway? You're much safer inside your home than anywhere else. You close your eyes and sleep. When you awake, you find that your rooms atmosphere is incredibly unsettling and uncomfortably dark. You flip on the side of your lamp and attempt to turn it on. It flickers but dies in a matter of seconds, as if the light itself is being consumed by the abyss. You begin to survey your now void like surroundings attentively. But are startled by a sudden and obnoxiously loud banging on the otherside of your bedroom window. Why someone would be knocking on your window this late at night is unknown, but is concerning none the less.",
        options:[["Look Through Window", "behindSL.lookOutWindow"], ["Scream For Help", "behindSL.scream"]]
    },
    lookOutWindow:{
        text: "You notice an abyss black void outside with no signs of light or life. A monstrous hallucinogenic entity with a mischievous smile fades in and appears in the window amidst the darkness. The horrifying sight ripples fear throughout your entire soul. As the creature begins to become more...identifiable. The window shatters with an abrupt force. The creature begins laughing demonically, as if its purpose is to taunt you as you feel your feet being lifted off the ground and your throat begins to tighten. Demonic laughter in varying pitches echoes throughout all while the darkness begins to cloud more and more. You're weeps for help and gasps for air are futile, and as you feel your brain's last few moments of cogniztion fade. The only thing you could possibly think of in your last moments is the creature's demonic laugh that came straight from hell itself.. Ending - Tormented",
        options:[["Rise Again", "behindSL.characterConfirmContinue"]]
    },
    scream:{
        text: "You let out an excurtiating roar of terror. You begin hearing loud, echoey, footsteps approach the bedroom door. *Thump* *Thump* *Thump*....Silence appears for a few seconds before abrupt knocking is heard at the door of your bedroom. You live alone, and the front door is locked. How did they get in your house?",
        options:[["I know what you fear " + behindPlayer.name, "behindSL.scream2"]]
    },
    scream2:{
        text:"The door swings forcefully revealing a being of faded darkness with what seems like a mischievous demonic smile. You begin to feel your throat tighten and dry up. Demonic laughter in varying pitches echoes throughout the room, all while the darkness begins to fill your vison more and more. Everything is cold. Your weeps for help and gasps for air are futile, and as you feel your brain's last few moments of cogniztion fade. The only thing you could possibly think of in your last moments is the creature's demonic laugh that came straight from hell itself.... Ending - Intruder Alert",
        options:[["Rise Again", "behindSL.characterConfirmContinue"]]
    },
    getUp: { 
        text: "You get up begrudgingly, and waddle over to the center of your room. It's time to start your day.",
        options:[["Shower", "behindSL.shower"], ["Dress for Work", "behindSL.dress"], ["Begin the Day", "behindSL.begin"]]
    },
    getUpNaked: { 
        text: "You get up begrudgingly, and waddle over to the center of your room. It's time to start your day.",
        options:[["Shower", "behindSL.showerNaked"], ["Dress for Work", "behindSL.dress"], ["Begin the Day", "behindSL.begin"]]
    },
    shower: { 
        text: "You strip and hop in the shower. In and out like lightning, you take most of your time staring at your figure in the mirror and commiting acts of domestic terrorism on your body with unnatural beauty chemicals. ''I couldn't look better!''",
        options:[["Dress for Work", "behindSL.dressAfterShower"], ["Begin the Day", "behindSL.beginNaked"]]
    },
    showerNaked: { 
        text: "You strip and hop in the shower. In and out like lightning, you take most of your time staring at your figure in the mirror and commiting acts of terrorism on your body with unnatural beauty chemicals. ''I couldn't look better!''",
        options:[["Dress for Work", "behindSL.dressAfterShower"], ["Begin the Day", "behindSL.beginNakedV2"]]
    },
    beginNaked: {
        text:"Are you sure you want to go outside completely naked? Like legit, you got no clothes on. You are probably gonna get arrested.",
        options: [["Yes", "behindSL.continueOutsideNakedV2"], ["No", "behindSL.returnV2"]]
    },
    begin: {
        text:"Are you sure you want to go outside?",
        options: [["Yes", "behindSL.continueOutside"], ["No", "behindSL.returnV2"]]
    },
    return:{
        text:"You walk back inside. That was a close one! How could you ever forgot the most important steps of the morning!?",
        options:[["Shower", "behindSL.shower"], ["Dress for Work", "behindSL.dress"], ["Sike! Go back outside.", "behindSL.continueOutside"]]
    },
    returnV2:{
        text:"You walk back inside. That was a close one! How could you ever forgot the most important steps of the morning!?",
        options:[["Dress for Work", "behindSL.dress"], ["Sike! Go back outside.", "behindSL.continueOutside"]]
    },
    continueOutsideNaked: {
        text:"I'm warning you! This is not a good idea! " + behindPlayer.name + " are you some kind of sick creep?",
        options:[["Screw you narrator!", "behindSL.warned"]]
    },
    continueOutsideNakedV2: {
        text:"I'm warning you! This is not a good idea! " + behindPlayer.name + " are you some kind of sick creep?",
        options:[["Screw you narrator!", "behindSL.arrested"]]
    },
    warned: {
        text:"Connection terminated. I'm sorry to interrupt you, █████ , if you still even remember that name. But I'm afraid you've been misinformed. You are not here to receive a gift, nor have you been called here by the individual you assume, although, you have indeed been called. You have all been called here, into a labyrinth of sounds and smells, misdirection and misfortune. A labyrinth with no exit, a maze with no prize. You don't even realize that you are trapped. Your lust for change has driven you in endless circles, chasing the cries for help in some unseen chamber, always seeming so near, yet somehow out of reach, but you will never find them. This is where your story ends. And to you, the one behind the curtain, who somehow found this story terminal not intended for you, although this situation is that of which is outside your understanding. I have a feeling that you wont allow yourself in be kept in the dark. I have a feeling that you think this is just beginning. For the question of who I am, isn't relevant to you now. Just know I am here, and I am nearby. This place will not be remembered, and the memory of everything that started this can finally begin to fall back into place. As the agony of a situation like this should. And to you monsters trapped in the corridors, be still and give up your intentions of remaining in this brutality. They don't belong to you. For most of you, I believe there is and end to the torment, and perhaps more waiting in the afterlife." + behindPlayer.name + " it's time to reset - for you, and for those you have carried in your arms. This ends for all of us. But is just beginning for you. End communication. - Ending: Lost Connection",
        options:[["Rise Again", "behindSL.characterConfirmContinue"]]
    },
    arrested: {
        text:"You walk outside competely naked and what do you know! Streaking brings a lot of attention to yourself...especially since you live in a school zone. Complaints about your nudist activity have gone rampant with the department for months, but no one was willing to touch you until now. Registered into public records," + behindPlayer.name + " is arrested for 200 accounts of indecent exposure and sentenced to life in prison." + behindPlayer.name + "was promptly shanked to death 3 weeks into incarceration for not giving the head honcho a nutella toast sandwich.",
        options:[["Rise Again", "behindSL.characterConfirmContinueNaked"]]
    },

        //----------------------------------------\\
        //-------------Area 2: Level 0------------\\
        //----------------------------------------\\

    continueOutside: {
        text:"You approach the front door and step outside. You attempt to plant your feet on the patio but end up falling straight through it. After falling into what seemed to be warped space, your mind collapes from the confusion and you eventually pass out mid flight...",
        options:[["Continue", "behindSL.level0intro"]]
    },
    level0intro: {
        text: "You wake up in a room with the stink of old moist carpet and your face rug burned and wet from a somewhat uncomfortable sleeping position on the floor. Mono-yellow wallpaper aligns the walls in an inconsistent but endless fashion, with the background noise of fluorescent lights buzzing manically. There are a series of segmented empty rooms with long hallways and random walls breaking up the monotony reminiscing that of an abandoned backroom office space. The place feels lifeless and bleakly desolate to its core.",
        options:[["Walk around the Building","behindSL.walk"],["Call out for Help", "behindSL.call"],["Search for an Exit", "behindSL.searchExit"]]
    },
    walk:{
        text:"You walk around and explore the general area. You pick random areas to follow, take some turns that lead to a dead-end, and find a corridor that looks like it goes straight for miles. You begin to notice that the lights sound significantly louder than before.",
        options:[["Continue Down Hallway","behindSL.hallWayOption"], ["Damage a random wall", "behindSL.damage"]]
    },

        //Make the savable option of damaging the wall.

    hallWayOption:{
        text:"You walk down the hallway in front of you. After walking for what seems like an eternity, you realize you've come full circle and have ended up at the exact same place you started. You never made any turns and the hum of lights is deafeningly loud. Your vision blurs and you feel as if your brain is melting.", 
        options:[["Search for an Exit", "behindSL.searchExit"],["Call for Help", "behindSL.call"]]
    },
    call:{
        text:"After about an hour and a half of calling out the words ''Is anyone out there? Can anyone hear me?'' etc. You finally come to the conclusion that...YOU ARE IN COMPLETE ISOLATION.",
        options:[["Walk Around the Building", "behindSL.walk"],["Search for an Exit", "behindSL.searchExit"]]
    },
    searchExit:{
        text:"You start searching for an exit. After looking around for what feels like days stretching across motions of insanity and sickness, you come to find a room with a couple filing cabinets and a singular dark oak desk in the center. A regularly proportionate office space.",
        options:[["Search Cabinets", "behindSL.cabinets"],["Approach Desk", "behindSL.desk"]]
    }, 
    cabinets:{
        text:"You open the filing cabinets and start rifling through them. You find paper clips, office supplies, a pen, and sticky notes. You carefully hold on to the pen and sticky notes to make sure they don't get ruined.",
        options:[["Approach Desk", "behindSL.desk"]]
    },
    desk:{
        text:"You sit down at the desk and begin to collect your thoughts. You have been standing for days at this point, and sitting on the floor never really was a choice if you wanted to keep your clothes in good condition. How long will it take to find an exit? How long will it take for you to starve? The lights are making an ear pitchingly loud noise now and you can feel your sanity beginning to dwindle.  You advert your gaze from the table after staring at it for a while due to the comfort and normalcy it gives, when you realize something. ''Was this room always this color?''.",
        options:[["Inspect Room","behindSL.inspectRoom"],["Inspect Table", "behindSL.inspectTable"]]
    },
    inspectTable:{
        text:"After closer inspection of the table. A sticky note written in black pen resides in the center of the table. It reads ''"+ behindPlayer.name + ", do you remember? Remember. Remember this place. Remember your room. Remember. There is no help, we must help ourselves if we wish to escape this nightmare. That is if there is one. You are the only one that will forever hear that alarm for eternity.'' On the back of the sticky note , the text reads ''CODE: 10:28''. The writing is familiar to you, but discerning the meaning and who wrote it draws blanks in your mind. It's almost as if it's being fogged by a harsh black smoke inside your consciousness. Its hard to concentrate.",
        options:[["Inspect Room", "behindSL.inspectRoom"],]

        //Make functionality here that adds an additional option if they have sticky notes.
    },
    inspectRoom:{
        text:"You take time to analyze your current surroundings. You begin to hear abrupt, loud, knocking, coming from within the walls and sounds of various copying machines and papers shuffling can also be heard. The wallpaper is a mixture of dark brown and manilla. The lights abruptly change luminosity and sometimes darken to a pitch black, with varying sounds of loud humming from the single light source above the table. You also see a steel office door with some papers stapled to it.",
        options:[["Walk to Door","behindSL.door"],]
    },
    door:{
        text:"You approach the door and read the papers stapled onto it. It reads -- ''Hello fellow wanderer, you aren't alone. Not for long anyway. Well maybe for long, depending on how many attempts it takes for you to figure out the correct method for descending. -- In order to reach others like yourself, you'll need to no-clip through the floor, wall, or other bounds-constructive objects in the current level you find yourself on. How do you no-clip you ask? We don't know. It is a completely different method from person to person. Some people need to feel intense fear in order to accomplish it, while others simply just need a creative imagination and strong will. I'd start off with the latter. Focus on feeling your mass turn nonexistent as you fall directly through the floor with no means of stopping (similar to a ghost flying through a wall)...''",
        options:[["Continue Reading","behindSL.continueRead"],]},

    continueRead:{
        text:"''Most people can't no-clip for more than 3-5 seconds at a time. So falling through multiple floors shouldn't be an issue (note that isn't a guarantee). If that doesn't work. Try intensely thinking about things that frighten or excite you. If you're a normal person. The knocking inside that room should already be giving you the creeps, and if you are an even more paranoid/fearful person, you'd probably considered or attempted to curl up in the fetal position to cry manically, and trying that again might work as well. -- Hallucinations are common so no shame if you think something's watching you (because something usually is) and in a matter of a few moments you'll probably find yourself falling through the floor anyway. -- When you make it to the next level. Attempt to find our base at - Fun party land :) ! Come join us ! We have cake! :D -- The remaining bits of the paper seem to have been written in crayon and a yellow-reddish fluid/liquid coating. Many unintelligible words and drawings block the remaining text which you acknowledge would've been helpful to see.",
        options:[["Examine Paper", "behindSL.examinePaper"],]
    },
    examinePaper:{
        text:"The paper's details at the top of page read: 'M.E.G, Survival, Wandering, and Researching Guide Level 0 - Author: James John Corwin'.",
        options:[["Attempt to NO-CLIP","behindSL.attemptNOCLIP"], ["Open the Door","behindSL.door2"],]
    },
    door2:{
        text:"After reading that load of garbage, you think whatever sick monster that put you in this place must have stapled that paper on the door to give you a false sense of hope. Good thing you're smarter than that because they were probably looking forward to you attempting to pass through the floor like an idiot as some sick form of entertainment. You open the door and walk through it, finding yourself in a completely different set of corridors than what you originally remember when you entered. (But who really cares at this point anyway?) The mono-yellow returns, and the moist carpet along with it. You haven't eaten anything in days, and are starving to the point of considering biting your own flesh for some form of nutritional value while also desperately trying to drink your own saliva to refrain from drinking the dirty carpet water which you could tell can get you deathly ill. The buzzing of the lights is ear-piercing enough that it makes you begin to cover your ears and bend them shut to muffle the sound.  But the sound doesn't stop and instead becomes louder and more clear. You begin to scream and howl in agony when the lights suddenly shutter and blackout. -- After the longest 40 seconds of your life, the lights return but something is waiting for you… A loud thud with the appearance of a black humanoid figure with intense glowing yellow eyes stares directly at you.",
        options:[["Run Away", "behindSL.runAway"],["Fight Back", "behindSL.fightBack"],["Remain Still","behindSL.remainStill"]]
    },
    runAway:{
        text:"As you turn around to flee in the opposite direction. You see multiple black figures of the same description stalking you. Black sludge coats the walls from which more figures spawn from and your heart begins to tighten from the fear. You don't see a way to get past them.",
        options:[["Fight Back", "behindSL.fightBack"],["Remain Still","behindSL.remainStill"]]
    },
    fightBack:{
        text:"You raise your fist and charge belligerently at the creature. It creeps a sickening smile as it grabs your arm and snaps it in two, with bones piercing through the skin and muscle.  The pain is unbearable. Your body forces itself down due to the shock of the pain. On your knees, the creature forces its limbs down through the base of your throat and gouges out an abundance of tissue and your esophagus . You cough liters of blood and black gulch that looks similar to mold. The pain is immense and you are unable to scream for the coating of the black gulch and blood trapped in your throat has made it impossible for you to shed a word. Creatures climb from beneath the floor and begin tearing you apart viciously. First your eyes, then your ribs, then your stomach… -- Unable to see anything, you feel every moment of the torture, as sounds of demonic laughter, bloodshed, and broken cries for help echo across the endless yellow hellscape of a maze. You begin weeping. But the lack of eyes or facial features makes the act inconsequential. As everything turns dark and cold... the only sounds left are that of a humming, infinite, buzz. -- From a light you can no longer see. -- This is the end. -- Ending - Suffering While Awake",
        options:[["Rise Again", "behindSL.characterConfirm"]]
    },
    remainStill:{
        text:"Maybe it wants a staring contest? You begin to stare blankly at the creature, and to your surprise, it does the same. Staring back at you eyes bulging with a trance-enclosing glow. You knew eventually one of you would snap and the contest would end. What might happen when it ends? What will the creature do? To your surprise the lights flicker out and the creature dissipates from a figure into a shadow into an outline of mold on the moon yellow wall. You realize immediately after the contest you lost track of time,'How long was I staring at that moldy wall?' your eyes on fire with pain, you try to blink to soothe the anguish but dehydration begins to take its toll on your body beyond dry mouth. After rubbing your eyes for what felt like hours. You eventually collapse on the floor and awaken to find yourself somewhere completely different.",
        options:[["Get Up","behindSL.area3"]]
    },
    attemptNOCLIP:{
        text:"You think about what the paper said and not having come in contact with anything human in forever, you believe what it says. You try imagining the feeling of falling through the floor similar to when you walked outside that fateful day. After around an hour of jumping up and down and diving onto the floor to hopefully pass through it. You begin to doubt what the paper has to say. You walk back to the table to take a seat when all of a sudden you trip over your own leg falling rapidly, face crashing towards the floor when you end up passing right through it.",
        options:[["Next","behindSL.area3"]]
    },

        //---------------------------------------------------\\   
        //-----------------Area 3: level 1 ------------------\\
        //---------------------------------------------------\\   

    area3:{
        text:"You find yourself in a dark and bone chillingly cold space with concrete flooring and very little noticeable lighting. You can hardly see 10 - 20 feet in front of you before everything fades into a darkened void with a low hanging fog covering the floor beneath your knees making it hard to discern what you're directly standing on. As your vision adjusts to the atmosphere, more of the room is revealed to you, recognizing it as a large parking lot structure with large pillars aligned in the middle of the room. Each pillar has a different but vaguely familiar design, as if feelings of nostalgia reminisce through the room and are purposely troubling you... -- While trying to recall these feelings, your attention is disrupted by the sounds of various ambient noises. From scampering, to sloshing, to crunching, to whispers of unintelligible nature. The sounds seem to be coming from unknown origins, and you think maybe it's better that way. After a few minutes of listening to the sounds paralyzed by fear, paranoia kicks in and you begin to believe you're being watched and are light headed from the lack of food and water.",
        options:[["Attempt to NOCLIP Again","behindSL.noclipAgain"],["Wander Around", "behindSL.wander"]]
    },
    noclipAgain:{
        text:"You've decided enough is enough and this place was not safe in the slightest. That paper must've lied to you, and now you're in a worse position than before. You attempt to clip through the floor as you did previously. Attempting a few times to no avail. You realize all you're doing is tenderizing yourself for whatever might be making those sounds and as you turn around you spot a relatively familiar figure standing underneath a flood light.",
        options:[["Continue","famEnter"]],
    },
    famEnter:{
        options:[["","Enter"]],
    },
    wander:{
        text:"You begin wandering the vastly open area realizing its scale after a couple of hours of walking. You seem to have found yourself inside of some sort of industrial warehouse complex. -- As you look around. -- You find a vending machine, water fountain, miniature flashlight with a clipboard placed below it, and a walkie talkie.",
        options:[["Drink from fountain","behindSL.fountain"],["Try Vending Machine","behindSL.vendingMachine"],["Take Flashlight and Walkie Talkie","behindSL.take"]],
    },
    fountain:{
        text:"You walk towards the fountain and place your hand over the button to dispense the water. You push in and are surprised to find out that it actually works! You pull your head down vigorously and begin drinking from the spout. -- You realize the water has a distinctly subtle sweetness that is pleasant, but isn't quite what you expected at first. -- You feel as if the large sense of dread that has been plaguing you has been lifted off your shoulders.",
        options:[["Try Vending Machine","behindSL.vendingMachine"],["",""]],
    },
    vendingMachine:{
        text:"You attempt to work the vending machine but it seems to require an employee passcode to use.",
        options:[["Use Keypad","behindSL.keypad"],["Break into Machine","behindSL.breakMachine"],["Leave Machine Alone","behindSL.leaveMachine"]],
    },
    leaveMachine:{
        text:"Thinking there isn't anything good in the vending machine anyways you decide to leave it alone.",
        options:[["Drink from Fountain","behindSL.fountain"],["Try Vending Machine","behindSL.vendingMachine"],["Take Flashlight and Walkie Talkie","behindSL.take"]],
    },
    keypad:{
        text:"You lean in and put your hand over the buttons on the keypad.",
        options:[["Enter Random Numbers","behindSL.keypadRandom"],["",""]],
    },
    keypadRandom:{
        text:"The keypad displays ||INVALID EMPLOYEE NUMBER||. Maybe that wasnt a good idea...",
    },
    take:{
        text:"You take the Flashlight & Walkie Talkie. The flashlight lights up with a shine of a thousand stars and lights the path ahead of you. The walkie talkie seems functional, so you grab and push in the button of the radio and speak. -- 'Hello? Is anyone on the other side of this line? Anyone at all?' -- *PSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSH* -- The wail of static bursts through the walkie talkie. Before something is heard. -- 'Yeah…hello? Did someone say something?' (you hear a voice on the other side of the line speak) -- 'Yes I did, I'm here. My name is…..…my name is………'",
        options:[["Remember Your Name","behindSL.name"]],
    },
    name: {
        text:"'Yeah that's right...it's been so long I almost forgot. My name is "+ behindPlayer.name +" and I'm currently stuck in this hellscape of a warehouse facility. I haven't heard or seen any signs of human life in..well… so long I can't recall. The sounds and atmosphere of this place is driving me insane. I've been so isolated that I almost forgot that I even exist…who are you?' -- 'Well what an introduction this is but I can't seem to recall at all what my name is, or how I got here. And you don't sound like someone familiar but just know I'm in the same scenario as you. I found this walkie talkie next to a door that leads down into a basement. The door is coated in blood and mold, so it's best to assume I shouldn't go down there.' -- The person pauses for a moment and takes a deep breath. -- 'I found a doorway with a sign that says 'Level 2' on it. I think this is an exit but…' -- Their voices began to break as a soft sob broke out. -- '...I *cough* don't think I'll be able too… *cough cough*  make it out of here *intense distortion*.' -- After you hear those words on the other side of the radio, you realize the person on the other side had sounded coarse and dehydrated. As if they had consumed nothing but sand as replacement for liquid their entire life. -- Loud sounds of scratching and peeling are distorted through the radio microphone. Splatter sounds of what you assume is blood is also heard as squashing and squishing sounds follow it. Shredding and cracking of dry skin ripples through the radio before it cuts. *click* -- As the radio silences. You realize you hear screams exactly like what you heard on the radio, in close proximity to your location. -- If there's an exit there. The danger might be worth it. -- What do you do?",
            options:[["Stay Where You Are","behindSL.stay"],["Go Towards the Screams","behindSL.towardScreams"]],
    },
    stay:{
        text:"Standing here for a long time makes you think that there may not even be a real reason why you of all people are down here suffering through this hellscape. All this contemplation makes you thirsty and think about the water fountain.",
        options:[["Drink From fountain","behindSL.fountain"],["Try Vending Machine","behindSL.vendingMachine"],["Continue walking","behindSL.continueWalking"]],
    },
    continueWalking:{
        text:"",
        options:[["",""],["",""]],
    },
        //I suggest figuring out dehydration methods with the fountain before writting here

    towardScreams:{
        text:"Running towards the screams, the man that was previously here claiming to find an exit had now turned into a flap of skin over a skeleton and leftover viscera while the innards of what was the man was across the room. While this creature had no real meat on their bones, this didn't stop the previously human creature to develop claws and figure out how to use them, it was clawing at one of the walls leaving scratch marks along the concrete walls. It realizes you're here and makes a dash towards you with a bloody gleam in its eyes.",
        options:[["Rush Past","behindSL.rush"],["Fight the Being","behindSL.fight"]["Flee the Encounter","behindSL.fleeEncounter"]],
    },

// rush:{
//     text:"",
//     options:[["",""],["",""]],
// },

// fight:{
//     text:"",
//     options:[["",""],["",""]],
// },

// fleeEncounter:{
//     text:"",
//     options:[["",""],["",""]],
// },
//the options above require text and options

    breakMachine:{
        text:"You attempt to shake the machine and realize it's bolted to the ground and without tools that thing is not moving. Thinking of more ideas, you wonder if you can use one of the items around you to shatter the glass. You throw the miniature flashlight at the vending machine's front panel. But to your surprise, the glass didn't even have a scuff. You rub your hand on the clear panel and recognize it as some kind of clear coated, strong, bullet-proof polycarbonate material. When you had thrown the flashlight at the vending machine, it bounced off violently and shot out into the darkness behind you. As the flashlight disappears you hear clinks of metal against metal rupturing through the whole building. You wander towards the area where the flashlight went and find a metal staircase shrouded in darkness with the flashlight nowhere in sight.",
        options:[["Make Your Way Down","behindSL.down"],["Continue breaking into the Machine","behindSL.continueBreakMachine"]],
    },
    stay:{
        text:"Standing here for a long time makes you think that there may not even be a real reason why you of all people are down here suffering through this hellscape. All this contemplation makes you thirsty and think about the water fountain.",
        options:[["",""],["",""]],
    },
    towardScreams:{
        text:"Running towards the screams, the man that was previously here claiming to find an exit had now turned into a flap of skin over a skeleton and leftover viscera while the innards of what was the man was across the room. While this creature had no real meat on their bones, this didn't stop the previously human creature to develop claws and figure out how to use them, it was clawing at one of the walls leaving scratch marks along the concrete walls. It realizes you're here and makes a dash towards you with a bloody gleam in its eyes.",
        options:[["",""],["",""]],
    },
    breakMachine:{
        text:"You attempt to shake the machine and realize it's bolted to the ground and without tools that thing is not moving. Thinking of more ideas, you wonder if you can use one of the items around you to shatter the glass. You throw the miniature flashlight at the vending machine's front panel, but to your surprise the glass didn't even have a scuff. You rub your hand on the clear panel and recognize it as some kind of clear coated, strong, bullet-proof material. When you had thrown the flashlight at the vending machine, it bounced off violently and shot out into the darkness behind you. As the flashlight disappears you hear clinks of metal against metal rupturing through the whole building. You wander towards the area where the flashlight went and find a metal staircase shrouded in darkness with the flashlight nowhere in sight.",
        options:[["Make Your Way Down","behindSL.down"],["Continue breaking into the Machine","behindSL.continueBreakMachine"]],
    },
    down:{
        text:"You make your way down the metal staircase for what feels like ages, after several dozen steps the silence of the previous area begins to fade as it's overtaken by the hissing of pneumatic machinery. The clamping of presses and the clank of old factory machines whirr into life as you descend deeper into the depths of this staircase. Eventually you make your way to the bottom just barely beyond the factory hissing with it still audible to your ears. You scan the basement for anything of interest and find some sticky notes and a pencil. It's the perfect scenario, if someone ends up in your situation you can write notes along the walls to give tips and tricks on what to do next. This thought was cut short as the hissing from the factory was changed into the hissing of a living being, this thing was mimicking the sounds of the machine's pneumatic hissing and was doing a pretty good job. As the creature of false proportions and featureless faces (yes multiple) come closer and closer it drops into the floor just before it reaches you. Good it wasn't real, however what happened next is very real as this is a warm dark and somewhat damp from the steam in the factory this had attracted this living fungus spider creature, what was strange for this interaction was that it appeared to be a massive hive of these things with more than 40 spilling in through the doorway to the stairs. It turns out these things are incredibly infectious and ended this adventure short. -- OverRun ending",
        options:[["Rise Again",""]]
    },
    continueBreakMachine:{
        text:"You return to the vending machine really wanting those snacks for it's the only food you've seen in days. Banging on the vending machine in desperation you notice a change in color on the paint and glass going from black and clear to a smeared red. In your blind fury and hunger you kept hitting the vending machine to the point where your hands had suffered damage from attacking the food filled metal box.+Wounded Status Effect -- The sounds of you banging against the metal vending machine have attracted some monsters of the dark, you can hear them, but you can't see them. You soon realize that the sounds were created by the darkness itself as it swallows you whole and you crossfade out of existence without feeling a thing. -- You Died -- Hungering Darkness ending",
        options:[["Rise Again",""]]},
    };

//Story Page
let behindPage = document.getElementById('enterName'),
    behindData = behindPage.elements;

console.log(behindData);

//Related variables
let moveArea = behindSL.characterConfirm;  //Sets moveArea variable as the character confirmation screen to start the loop.
var behindBranches = ["behindSL"];
let behindNameStored = false;
let behindFamiliarStored = false;

function nextArea(place) { //Replaces the "moveArea" variable.
    moveArea = place;
}

//Construct function and other functions.
function behindNameConstruct(place) {
    let message = '<p name ="playerName"></p><p class = "behindStory">'+ place.text +'</p><ul>' //Sets message variable.
    for (i = 0; i < place.options.length; i++) { //For loop.
        message += '<button class= behindOptions type="submit" onclick="nextArea(' + place.options[i][1] + ')">' + place.options[i][0] + '</button>' //Add buttons with += message
    }
    for (i=0; i < message.length-6; i++) {
        if (message.substring(i,i+6)=="player") {
            message = message.replace("player", behindPlayer.name);
            message +='</ul>'
        } //Replaces behindPlayer default name to whatever the player typed and ends the unordered list.
    }
    return message;
}

function statusUpdate() { //Currently not in use.
    statsDiv = getElementsById("stats");
    statsDiv.innerHTML = behindData;
}

function behindDataY(event) { //Function that stores player name and data.
    if (behindNameStored == false) {
      let behindTextStored = behindData['playerName'].value;
      let output = document.getElementById('output');
      behindPlayer.name = behindTextStored;
      behindNameStored = true;
        }
    if (behindFamiliarStored == true) { //Stores "what figure do you see?".
         let behindTextStored = behindData['famName'].value;
         let output = document.getElementById('output');
         behindFam.name = behindTextStored;
         behindFamStored = false;
        }


output.innerHTML = `${behindNameConstruct(moveArea)}`; //Outputs function behindNameConstruct into inner HTML index.

console.log(behindPlayer); //Function that stores player name and other data.

event.preventDefault(); //Stop submit buttons from applying a page refresh.

    }

behindPage.addEventListener('submit', behindDataY); //Event listener to grab behindDataY function upon submit.