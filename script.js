let playerScore = 0;
let computerScore = 0;
const items = ["rock", "scissors", "paper"];

function getComputerChoice(){
    let computerChoiceIndex = Math.floor(Math.random() * items.length);
    return items[computerChoiceIndex];
}

function getHumanChoice(){
    return prompt("Rock, Scissors or Paper?").toLowerCase();
}

while (playerScore !== 3 && computerScore !==3) {
    let computerChoice = getComputerChoice();
    let playerChoice = getHumanChoice();

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
}

if (playerScore > computerScore){
    console.log(`Congratulations! You win with the score ${playerScore}-${computerScore}`);
} else if(playerScore < computerScore){
    console.log(`Sorry... You lose with the score ${computerScore}-${playerScore}`);
} else{
    console.log(`Draw! Final score is ${playerScore}-${computerScore}`);
}
