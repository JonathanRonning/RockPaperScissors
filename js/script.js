let choice;

function getComputerChoice(choice) {
    let computerChoice = Math.random()
    console.log(computerChoice)
    if (computerChoice >= 0.000 && computerChoice < 0.333) {
        console.log('rock')
    } else if (computerChoice >= 0.333 && computerChoice < 0.666) {
        console.log('paper')
    } else if (computerChoice >= 0.666 && computerChoice < 1) {
        console.log('scissors')
    } else {
        console.log('error?')
    }
}

getComputerChoice(choice);