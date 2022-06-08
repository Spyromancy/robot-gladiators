/*
Game States
    WIN - Player robot has defeated all enemy-robots
        * Fight all enemy-robots
        * Defeat each enemy-robot
    LOSE - Plaer robot's health is zero or less
*/
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemies = ["Kiryu", "XJ-9", "Megas XLR", "Mecha Nicol Bolas", "a standard microwave"];
var enemyHealth = 50;
var enemyAttack = 12;

var fightskip = ["FIGHT","SKIP"];




var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0){
        do{
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.").toUpperCase();
    
            if(!(fightskip.includes(promptFight))){
                window.alert("Please enter a valid response, 'FIGHT' or 'SKIP'.")
            }
        } while(!(fightskip.includes(promptFight)) )
    
        if(promptFight==="FIGHT"){
            enemyHealth -= playerAttack;
            if (enemyHealth <= 0) {
                window.alert(`${enemyName} has been destroyed! You won 10 gold in prize money!`);
                playerMoney+=10;
                break;
            }
            else {
                window.alert(`${enemyName} takes the blow and has ${enemyHealth} left`) // I know what f literals are in python. I can't go back. i won't go back. you can't make me.
            }
            playerHealth -= enemyAttack;
            if (playerHealth <= 0) {
                window.alert(`${playerName} has been destroyed!`);
                break;
            }
            else {
                window.alert(`${playerName} takes the blow and has ${playerHealth} left`);
            }
        }
        else{
            if(window.confirm("Are you sure you want to back out? There is a 10 gold penalty.")){
                window.alert(`${playerName} has chosen to skip this fight.`); // coward.
                playerMoney-=10;
                break;
            }
            else{
                fight();
            }
            
        }
    }   

};

var shop= function(){

    var promptShop = window.prompt("Welcome to the shop! Are you here for REPAIRs? Or do you wanna UPGRADE your robot for extra firepower?\nPlease enter one: 'REPAIR', 'UPGRADE', 'LEAVE'").toUpperCase();
    switch(promptShop){
        case "REPAIR":
            if(window.confirm("You wanna give your 'bot some time in the repair bay? Sure thing kid, that'll be about 7 gold, how's that sound?")){
                if(playerMoney<10){
                    window.alert("Sorry kid, I ain't runnin' no charity business. Come back when you've actually got some money to spend. You'll have to make due with whatcha got.");
                }
                else{
                    playerHealth+=30;
                    playerMoney-=7;
                    window.alert("There ya go kid, she should be runnin' a little better now. Try to make it back in one piece yeah?");
                }
            }
            else{
                shop();
                break;
            }
            break;
        case "UPGRADE":
            if(window.confirm("Bigger guns? That's what i'm talkin' about! I got missiles, lasers, flamethrowers, you name it, i got it all for 7 gold. Er, you're not a cop right?")){
                if(playerMoney<7){
                    window.alert("Sorry kid, I ain't runnin' no charity business. Come back when you've actually got some money to spend. You'll have to make due with whatcha got.");
                }
                else{
                    playerAttack+=6;
                    playerMoney-=7;
                    window.alert("Alright kid, got 'er all hooked up and ready to rumble. Go melt some faces.");
                }
            }
            else{
                shop();
                break;
            }
            break;
        case "LEAVE":
            window.alert("Alright then, see you round kid. I'm rootin' for ya.");
            break;
        default:
            window.alert("Sorry kid, what was that? I didn't understand you.");
            shop();
            break;
    }
};

var endGame = function(){
    if(playerHealth > 0){
        window.alert(`Congratulations! You defeated all your rivals and finished with a score of ${playerMoney}!`)
    }
    else{
        window.alert("You were bested by your opponents.")
    }
    if(window.confirm("Would you like to play again?")){
        startGame();
    }
    else{
        window.alert("Thank you so much for to playing my game.")
    }
};
var randomHealth = function(){
    value = Math.floor(Math.random()*21)+40
}
var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i =0; i<enemies.length; i++){
        if(playerHealth > 0){
            window.alert(`Welcome to Robot Gladiators!\nGet ready for Round ${i+1}!`);
        }
        else{
            window.alert("Your robot has been destroyed!\nGAME OVER");
            break;
        }
        var currentEnemy = enemies[i]
        enemyHealth=40+Math.floor(math.random()*21);
        fight(currentEnemy);
        if(i+1 < enemies.length && playerHealth < 0){
            if(window.confirm("Hey kid, over here! Pockets feelin' a little heavy? Why don't you come on down to my shop and see if there's anything you like?")){
                shop();
            }
            
        }
    }
    endGame();
};


startGame();

// fight();
