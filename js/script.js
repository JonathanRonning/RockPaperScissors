var choice;

function getComputerChoice(choice) {
    let computerChoice = Math.random()
    console.log(computerChoice)
    if (computerChoice >= 0.000 && computerChoice < 0.333) {
        return choice = 'rock'
    } else if (computerChoice >= 0.333 && computerChoice < 0.666) {
        return choice = 'paper'       
    } else if (computerChoice >= 0.666 && computerChoice < 1) {
        return choice = 'scissors'
    } else {
        return console.log('error in getComputerChoice')
    }
}
var computerChoice = getComputerChoice(choice); //this (i think) is playing an initial and extra game that I do not want. Idk why.

function getPlayerChoice(choice) {
    let whatIsPlayerChoice = prompt('enter choice as a number: \n1. rock \n2. paper \n3. scissors')
    if (whatIsPlayerChoice == 1) {
        return choice = 'rock'
    } else if (whatIsPlayerChoice == 2) {
        return choice = 'paper'
    } else if (whatIsPlayerChoice == 3) {
        return choice = 'scissors'
    } else {
        alert('You have entered number outside of given range')
        return choice = 'invalid entry'
    }
}
var playerChoice = getPlayerChoice(choice); //this (i think) is playing an initial and extra game that I do not want. Idk why.

var playerCount = 0;
var computerCount = 0;

function playRound(computerChoice, playerChoice) {
    console.log(`Player choice is: ${playerChoice}`);
    console.log(`Computer choice is: ${computerChoice}`);
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('It\'s a draw')
            return playerCount = playerCount + 1, computerCount = computerCount + 1
        } else if (computerChoice === 'paper') {
            console.log('Computer wins this round')
            return computerCount = computerCount + 1
        } else if (computerChoice === 'scissors') {
            console.log('Player wins this round')
            return playerCount = playerCount + 1
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('Player wins this round')
            return playerCount = playerCount + 1
        } else if (computerChoice === 'paper') {
            console.log('it\'s a draw')
            return playerCount = playerCount + 1, computerCount = computerCount + 1
        } else if (computerChoice === 'scissors') {
            console.log('Computer wins this round')
            return computerCount = computerCount + 1
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('Computer wins this round')
            return computerCount = computerCount + 1
        } else if (computerChoice === 'paper') {
            console.log('Player wins this round')
            return playerCount = playerCount + 1
        } else if (computerChoice === 'scissors') {
            console.log('It\'s a draw')
            return playerCount = playerCount + 1, computerCount = computerCount + 1
        }
    }
}

let playerCountLog = `player\'s score is ${playerCount}`;
let computerCountLog = `computer\'s score is ${computerCount}`;
var gameCount;


function playGame() {
    for (gameCount = 1; gameCount < 6; gameCount++) {
        playRound(getComputerChoice(choice), getPlayerChoice(choice));
        console.log(`(playGame) player score is ${playerCount}`);
        console.log(`(playGame) computer score is ${computerCount}`);
        console.log(`game ${gameCount}`);
    }
    if (playerCount > computerCount) {
        console.log('Player wins! \nRefresh page to play again.')
    } else if (computerCount > playerCount) {
        console.log('Computer wins! \nRefresh page to play again.')                  
    } else {
        console.log('It\'s a draw! \nRefresh page to play again.')  
        }                  
}
playGame();