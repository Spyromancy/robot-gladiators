var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName,playerHealth,playerAttack);

var enemyName = "Kiryu";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth -= playerAttack;
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has been destroyed!`)
    }
    else {
        window.alert(`${enemyName} takes the blow and has ${enemyHealth} left`) // I know what f literals are in python. I can't go back. i won't go back. you can't make me.
    }
    playerHealth -= enemyAttack;
    if (playerHealth <= 0) {
        window.alert(`${playerName} has been destroyed!`)
    }
    else {
        window.alert(`${playerName} takes the blow and has ${playerHealth} left`) 
    }
    console.log("enemy health: " + enemyHealth, "\nplayer health: " + playerHealth);

};

fight();