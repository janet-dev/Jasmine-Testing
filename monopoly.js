
function rollDice() {
    // Roll the dice (random number from 1 to 6)
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return [die1, die2];
}

function game() {
    console.log("Welcome to our Monopoly Game!!!");
    let result = rollDice();
    console.log(`You rolled ${result[0]} and ${result[1]}`);
}

game();  // run the game


// END of file - export functions to monopoly.spec.js for Jasmine testing
module.exports = (game, rollDice);