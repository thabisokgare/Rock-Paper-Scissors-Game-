function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}
// existingco code ...
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
    const result = getRoundResults(userOption);
    roundResultsMsg.textContent = result;
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        if (playerScore === 3) {
            winnerMsgElement.textContent = "Player has won the game!";
        } else {
            winnerMsgElement.textContent = "Computer has won the game!";
        }
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
}

function resetGame() {

    // Reset scores 
    playerScore = 0;
    computerScore = 0;

    // Update score display
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;

    // Hide reset button and show options
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";

    // Clear result messages
    winnerMsgElement.textContent = "";
    roundResultsMsg.textContent = "";

}
resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

const result = getRoundResults(userOption);
console.log(result);
console.log("Player Score:", playerScore, "Computer Score:", computerScore);
