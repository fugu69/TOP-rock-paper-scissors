// script.js

const items = ["rock", "paper", "scissors"];

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerScoreElem = document.querySelector("#player-score");
const computerScoreElem = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => playRound("rock"));
paperButton.addEventListener('click', () => playRound("paper"));
scissorsButton.addEventListener('click', () => playRound("scissors"));

function getComputerChoice() {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

function displayChoices(playerChoice, computerChoice) {
    const playerChoiceElem = document.querySelector("#player-choice");
    const computerChoiceElem = document.querySelector("#computer-choice");

    playerChoiceElem.textContent = playerChoice === "rock" ? "🪨" :
                                    playerChoice === "paper" ? "📄" : "✂️";
    computerChoiceElem.textContent = computerChoice === "rock" ? "🪨" :
                                     computerChoice === "paper" ? "📄" : "✂️";

    // Add animation class
    playerChoiceElem.classList.add('show');
    computerChoiceElem.classList.add('show');
}

function updateScores() {
    playerScoreElem.textContent = `Player Score: ${playerScore}`;
    computerScoreElem.textContent = `Computer Score: ${computerScore}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.querySelector('#result').textContent = "";
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    displayChoices(playerChoice, computerChoice);

    // Determine the result
    let resultMessage;
    if (playerChoice === computerChoice) {
        resultMessage = `Draw! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
    }

    document.querySelector('#result').textContent = resultMessage;
    updateScores();

    // Check if the game is over
    if (playerScore === 3 || computerScore === 3) {
        setTimeout(() => {
            const winner = playerScore === 3 ? "Player" : "Computer";
            alert(`${winner} wins the game!`);
            resetGame();
        }, 200); // Show alert after 0.2 seconds
    } else {
        // Reset choices after a delay
        setTimeout(() => {
            document.querySelector("#player-choice").classList.remove('show');
            document.querySelector("#computer-choice").classList.remove('show');
        }, 2000); // Hide choices after 2 seconds
    }
}
