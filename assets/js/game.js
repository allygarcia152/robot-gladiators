var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple vlaues at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames =  ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName){
  // alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to  FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  //if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracking the amount set in the player's attack var
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remainig.");

    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert (enemyName + " has died!");
    } else {
      window.alert( enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by subtracting the amount set in the enemy's attack var
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //check player's health
    if (playerHealth <= 0) {
      window.alert (playerName + " has died!");
    } else {
      window.alert (playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!"); 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight 
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      //subtract money from playerMoney var for skippinh
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight ()
    }
  } else {
    window.alert ( "You need to choose a valid option. Try agian!");
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  fight (enemyNames[i]);
}