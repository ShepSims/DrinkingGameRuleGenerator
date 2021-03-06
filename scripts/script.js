var clean_rules = Array();
var smoking_rules = Array();
var drinking_rules = Array();
var stripping_rules = Array();
var sex_rules = Array();
var selections = Array();
var rules = Array();
var players = [];

//Add Clean Rules

clean_rules.push("Serenade the person to your right");
clean_rules.push("Get Wet");
clean_rules.push("Trade shoes with the person to your left");
clean_rules.push("Trade shirts with the person to your right");
clean_rules.push("Do the worm");
clean_rules.push("Call your mom");
clean_rules.push("Do 10 pushups");
clean_rules.push("Evil Laugh");
clean_rules.push("Do your best impression of someone at the table");
clean_rules.push("Reverse order");
clean_rules.push("Post on Instagram");
clean_rules.push("You owe the person to your left food");
clean_rules.push("Roast someone");
clean_rules.push("Do five ' I'm a star' jumps");
clean_rules.push("go make snacks for the group");


//Add Smoking Rules

smoking_rules.push("Roll a j");
smoking_rules.push("Take a rip");
smoking_rules.push("geeb");
smoking_rules.push("take 2 hits");
smoking_rules.push("choose someone to take a hit");
smoking_rules.push("choose someone to take 2 hits");
smoking_rules.push("whoever has the reddest eyes take another toke");


//Add Drinking Rules

drinking_rules.push("drink");
drinking_rules.push("Take a shot");
drinking_rules.push("Girls Drink");
drinking_rules.push("Guys Drink");
drinking_rules.push("Youngest player, take a shot");
drinking_rules.push("Oldest player, take a shot");
drinking_rules.push("Waterfall");
drinking_rules.push("Drink for every person who you can't name in the room.");
drinking_rules.push("Give a drink");
drinking_rules.push("shotgun");
drinking_rules.push("Last person to touch the floor, drink");
drinking_rules.push("All singles drink");
drinking_rules.push("bodyshot");
drinking_rules.push("No more cussing!  If you do you drink");
drinking_rules.push("Last person standing drinks.  1,2,3 GO!");
drinking_rules.push("finish your drink");
drinking_rules.push("choose someone to finish their drink");
drinking_rules.push("headstand or drink");
drinking_rules.push("Switch names with someone.  Whenever another player calls either of you by the wrong name, they drink");
drinking_rules.push("You can't talk until you finish your drink");
drinking_rules.push("choose a drinking buddy and finish your drinks");
drinking_rules.push("take 3 drinks");
drinking_rules.push("get everyone who needs one another drink");
drinking_rules.push("You must remove an imaginary little green man from the rim of your drink every time you take a sip and replace him after. Should another player catch you failing to do your duty you must finish your drink. It is your responsibility to take care of the little green man until another player is assigned the role");
drinking_rules.push("give out 5 drinks");
drinking_rules.push("give out 5 drinks");


//Add Stripping Rules

stripping_rules.push("Strip");
stripping_rules.push("Give a strip");
stripping_rules.push("Oldest player strip");
stripping_rules.push("Most clothed strip");
stripping_rules.push("Take an article of clothing off the person to your left");
stripping_rules.push("Whoever has the longest last name strips");
stripping_rules.push("Whoever has the most annoying laugh strips");
stripping_rules.push("Vote on who should strip");


//Add Sexual Rules

sex_rules.push("Kiss the person to your left");
sex_rules.push("Kiss the person to your right");
sex_rules.push("Twerk");
sex_rules.push("Have you ever hooked up with someone in the room? if yes, rate it");
sex_rules.push("Who is the hottest MPS in the room?");
sex_rules.push("Get Wet");
sex_rules.push("How long has it been since your last hook up?");
sex_rules.push("What is the nastiest thing you have ever done in public?");
sex_rules.push("Which player is the worst in bed?");
sex_rules.push("Which player is the best in bed?");
//sex_rules.push("Where is the riskiest place you have ever had sex?");
sex_rules.push("Compliment the player with the best ass");
sex_rules.push("What is your body count");
sex_rules.push("Give a lap dance");
sex_rules.push("Get a lap dance");



/* 

Function Definions 


display_rule() - displays a rule based on selections - if none selected uses all rules

get_random_player() - returns a random player

reload_rules() - reloads the rules - called when user selections dont match previous selections

get_select_values() - gets the values selected by the user

get_rule_with_playername(r) - accepts rule and returns rule with "playername" replaced with value from players array

add_player(playername) - adds playername to players array

*/

// Display a rule chosen from the selections made by user
function display_rule()
{
    var new_selections = get_select_values();
    if (selections != new_selections){
        console.log("rules updated");
        selections = new_selections;
        reload_rules();
    }
    
    // select a rule from rules
    var rule = rules[Math.floor(Math.random() * rules.length)];
    
    // Add playername if necessary
    try{
        rule = get_rule_with_playername(rule["rule"]);
    }
    catch(err){}
    finally{
        rule = rule.replace("playername",get_random_player())
        document.getElementById("Result").innerHTML = rule;
    }
}

// Gets a rule 
function reload_rules()
{
    rules = [];
    
    if (selections.length<1||selections==undefined){
        rules = rules.concat(stripping_rules, drinking_rules, smoking_rules, clean_rules, sex_rules);
    }
    
    // Add rules to array if selected
    if (selections.includes("stripping_rules")){
        rules = rules.concat(stripping_rules);
    }
    if (selections.includes("drinking_rules")){
        rules = rules.concat(drinking_rules);
    }
    if (selections.includes("smoking_rules")){
        rules = rules.concat(smoking_rules);
    }
    if (selections.includes("clean_rules")){
        rules = rules.concat(clean_rules);
    }
    if (selections.includes("sex_rules")){
        rules = rules.concat(sex_rules);
    }
}
    
// Returns the selected lists
 function get_select_values() {
     var x = document.getElementById("choices");
     var selects = Array();
     
     for (var i = 0; i < x.length; i++) {
        if (x.options[i].selected){
        selects.push(x.options[i].value);
        }
     }
     return selects;
}

// Adds a player to the player list
function add_player()
{
    var pn = document.getElementById("playername").value;
    players.push(pn);
}

// Gets a random player to use in the rule
function get_random_player()
{
    var player = players[Math.floor(Math.random() * players.length)];
    return player;
}

