let humanScore = 0
let computerScore = 0
let gameCount = 0

const rslt = document.querySelector('#results');       // get results div once
const scores = document.querySelector('#scores');      // get scores div once
const gameScores = document.querySelector('#gameScores'); // get final result div once
const restartButton = document.querySelector('#restart');


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






function playRound(hChoice) {
    let cChoice = getComputerChoice();  // Random computer choice
    

    console.log(`Human: ${hChoice}, Computer: ${cChoice}`);

    if (cChoice === hChoice) {
        console.log("It's a tie!");
        rslt.textContent = "Its a tie!"
        humanScore++;
        computerScore++;
    } else if (
        (hChoice === "rock" && cChoice === "scissors") ||
        (hChoice === "paper" && cChoice === "rock") ||
        (hChoice === "scissors" && cChoice === "paper")
    ) {
        rslt.textContent = "You won this round!"
        humanScore++;
    } else {
        rslt.textContent = "The computer won this round!"
        computerScore++;
    }

    scores.textContent = `Computer score - ${computerScore}, your score - ${humanScore}`;
    gameCount++;
}




const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', event => {
    if (gameCount === 5) {  
      if (computerScore > humanScore) {
        gameScores.textContent = "The Computer won this one!";
      } else if (computerScore < humanScore) {
        gameScores.textContent = "You got the W!";
      } else {
        gameScores.textContent = "This one is a tie!";
      }
      return;  
    }
    const playersChoice = event.target.id;
    playRound(playersChoice);
    
  });
});


restartButton.addEventListener('click', () => {
humanScore = 0;
computerScore = 0;
gameCount = 0;

    // Clear messages and scores
rslt.textContent = '';
scores.textContent = '';
gameScores.textContent = '';
});
    

