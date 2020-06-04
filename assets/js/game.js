var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
    while (enemyHealth  > 0 && playerHealth > 0)  {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            console.log(
                promptFight
            );
        
        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //if user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes, leave fight
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight. Goodbye. ")
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log(playerName + " now has " + playerMoney + " coins remaining. ");
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        
            //award player moneyf or winning
            playerMoney = playerMoney + 20;
    
            //leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } //close for while loop
}; //fight function close

for (var i = 0; i < enemyNames.length; i++) {
    // debugger;
    // call fight function with enemy robot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}
