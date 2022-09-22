let choice;

function getComputerChoice(choice) {
    let computerChoice = Math.random()
    console.log(computerChoice)
    if (computerChoice >= 0.000 && computerChoice < 0.333) {
        return choice = 'rock'
        //return console.log(choice)
    } else if (computerChoice >= 0.333 && computerChoice < 0.666) {
        return choice = 'paper'                                                 
        //return console.log(choice)
    } else if (computerChoice >= 0.666 && computerChoice < 1) {
        return choice = 'scissors'
        //return console.log(choice)
    } else {
        return console.log('error in getComputerChoice')
    }
}
let computerChoice = getComputerChoice(choice);
console.log(`computer choice: is ${computerChoice}`)