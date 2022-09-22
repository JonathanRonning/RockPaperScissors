var choice; 

function getComputerChoice(choice) {
    let computerChoice = Math.random()
    console.log(computerChoice)
    if (computerChoice >= 0.000 && computerChoice < 0.333) {
        choice = 'rock'
        return console.log(choice)
    } else if (computerChoice >= 0.333 && computerChoice < 0.666) {
        choice = 'paper'                                                    //choice is not globally defined, should be an issue
        return console.log(choice)
    } else if (computerChoice >= 0.666 && computerChoice < 1) {
        choice = 'scissors'
        return console.log(choice)
    } else {
        return console.log('error in getComputerChoice')
    }
}
getComputerChoice(choice);