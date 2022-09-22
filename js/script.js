let choice;

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
let computerChoice = getComputerChoice(choice);
console.log(`Computer choice: is ${computerChoice}`)              //this should probably run after player choice is taken

function getPlayerChoice(choice) {
    let playerChoice = prompt('enter choice: \n1. rock \n2. paper \n3. scissors')
    if (playerChoice == 1) {
        return choice = 'rock'
    } else if (playerChoice == 2) {
        return choice = 'paper'
    } else if (playerChoice == 3) {
        return choice = 'scissors'
    } else {
        alert('you entered number outside of given range')
        return choice = 'invalid entry'
    }
}
playerChoice = getPlayerChoice(choice);
console.log(`Player choice is: ${playerChoice}`)

let playerCount = 'player score is ' + 0;
let computerCount = 'computer score is ' + 0;

function playRound(computerChoice, playerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('it\'s a draw')
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
            console.log('player wins this round')
            return playerCount = playerCount + 1
        } else if (computerChoice === 'scissors') {
            console.log('it\'s a draw')
            return playerCount = playerCount + 1, computerCount = computerCount + 1
        }
    }
}

playRound(computerChoice, playerChoice);
console.log(computerCount);
console.log(playerCount);

function game( playRound(computerChoice, playerChoice)) { //I have no idea if this is correct

}