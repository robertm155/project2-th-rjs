function priority () {
    //(player1.speed < player2.speed && player1.speed < enemy.speed) ? console.log("p1") : console.log("p2");
    if(player1.speed > enemy.speed){
        playerAttacks()
        enemyAttacks()
        arbitor()
    }else{
        enemyAttacks()
        playerAttacks()
        arbitor()
    }
} 

function playerAttacks(){
    enemyHP = enemyHP - player1.strength;
    console.log(enemyHP + "left for enemy")
}

function enemyAttacks(){
    playerHP = playerHP - enemy.strength;
    console.log(playerHP + "left for player")
}

function arbitor(){
    if(playerHP < 0){console.log("Game Over")}
    else if(enemyHP < 0){console.log("Victory")}
}
 
//function playerWins () {(enemyHP < 0) ? console.log("player wins") : console.log("")} 

//battleTransition() 