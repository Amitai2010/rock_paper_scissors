let humanScore = 0
let computerScore = 0


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let num = getRandomInt(3)

    if (num === 0) {
        return "rock"
    }

    else if (num === 1) {
        return "paper"
    }

    else {
        return "scissors"
    }
}


function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice.trim().toLowerCase();
}

function playRound() {
    let cChoice = getComputerChoice();  // Random computer choice
    let hChoice = getHumanChoice();     // Human choice (assume from prompt or input)

    console.log(`Human: ${hChoice}, Computer: ${cChoice}`);

    if (cChoice === hChoice) {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
    } else if (
        (hChoice === "rock" && cChoice === "scissors") ||
        (hChoice === "paper" && cChoice === "rock") ||
        (hChoice === "scissors" && cChoice === "paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    let cChoice
    let hChoice

    for (let i = 0; i < 4; i++) {

        playRound()
    }

    if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else if (computerScore < humanScore) {
        console.log("You won the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame()