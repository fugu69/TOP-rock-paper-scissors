let playerScore = 0;
let computerScore = 0;
const items = ["rock", "scissors", "paper"];

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', function() {
    playRound("rock");
});

paperButton.addEventListener('click', function() {
    playRound("paper");
});

scissorsButton.addEventListener('click', function() {
    playRound("scissors");
});


function getComputerChoice(){
    let computerChoiceIndex = Math.floor(Math.random() * items.length);
    return items[computerChoiceIndex];
}

function getHumanChoice(){
    return prompt("Rock, Scissors or Paper?").toLowerCase();
}

function whoWins(playerScore, computerScore){
    if (playerScore > computerScore){
        console.log(`Congratulations! You win with the score ${playerScore}-${computerScore}`);
        alert(`Congratulations! You win with the score ${playerScore}-${computerScore}`);
    } else if(playerScore < computerScore){
        console.log(`Sorry... You lose with the score ${computerScore}-${playerScore}`);
       alert(`Sorry... You lose with the score ${computerScore}-${playerScore}`);
    } else{
        console.log(`Draw! Final score is ${playerScore}-${computerScore}`);
       alert(`Draw! Final score is ${playerScore}-${computerScore}`);
    }
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();

    if (playerChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("Draw! Rock vs. Rock");
        } else if (computerChoice === "paper"){
            console.log("Sorry, you lose... Paper beats Rock");
            computerScore += 1;
        } else{
            console.log("You win! Rock beats Scissors!");
            playerScore += 1;
        }
    }
    if (playerChoice === "paper"){
        if (computerChoice === "paper"){
            console.log("Draw! Paper vs. Paper");
        } else if (computerChoice === "scissors"){
            console.log("Sorry, you lose... Scissors beat Paper");
            computerScore += 1;
        } else{
            console.log("You win! Paper beats Rock!");
            playerScore += 1;
        }
    }
    if (playerChoice === "scissors"){
        if (computerChoice === "scissors"){
            console.log("Draw! Scissors vs. Scissors");
        } else if (computerChoice === "rock"){
            console.log("Sorry, you lose... Rosk beats scissors");
            computerScore += 1;
        } else{
            console.log("You win! Scissors beat Paper!");
            playerScore += 1;
        }
    }

    if (playerScore === 3 || computerScore === 3) {
        whoWins(playerScore, computerScore);
        // Reset scores for a new game
        playerScore = 0;
        computerScore = 0;
    }
}