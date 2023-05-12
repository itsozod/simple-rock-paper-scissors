const btns = document.querySelectorAll(".btn");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerScoreDisplay = document.querySelector("#playerscore");
const computerScoreDisplay = document.querySelector("#computerscore");
const restartBtn = document.querySelector("#restartBtn");

// Update name function that is used in another rock, paper, scissors game on my github page

// let name = 'Player';

// function updateName() {
//    name = document.getElementById("nameInput").value;
//   document.getElementById("playerText").innerHTML = `${name} ?`;

// }


let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;

// UI

restartBtn.disabled = true;
restartBtn.classList.add('restartBtn-disabled');
playerText.style.color = "brown";
computerText.style.color = "green";
resultText.style.color = "red";

// Changing name function

btns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resultText.textContent = result;

    if (result === "You won! Rock beats Scissors" || result === "You won! Paper beats Rock" || result === "You won! Scissors beats Paper") {
        playerScore++;
    } else if (result === "You lost! Scissors is beaten by Rock" || result === "You lost! Rock is beaten by Paper" || result === "You lost! Paper is beaten by Scissors" || result === "You lost! Rock is beaten by Paper") {
        computerScore++;
    }


    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            resultText.textContent = `You win the game!, ${player} beats ${computer} `;
        } else {
            resultText.textContent = `Computer wins the game!, ${computer} beats ${player}`;
        }
        btns.forEach(button => button.disabled = true);
        restartBtn.disabled = false;
        restartBtn.classList.remove('restartBtn-disabled');
    }
}));

// Computer turn
function computerTurn() {
    const randNumber = Math.floor(Math.random() * 3) + 1;

    switch(randNumber) {
        case 1: 
        computer = "✊";
        break;
        case 2:
            computer = "✋";
            break;
            case 3:
                computer = "✌️";
                break;
    }
}

// Commented code but also can be used if you want but need to be replaced by the other checkwinner() function

// function checkWinner() {
//     if (player === computer) {
//         return `It's a tie ${player} ties with ${computer}`;
//     } else if (
//         (player === "✊" && computer === "✌️") ||
//         (player === "✋" && computer === "✊") ||
//         (player === "✌️" && computer === "✋")
//     ) {
//         return `You won! ${player} beats ${computer}`;
//     } else {
//         return `You lost! ${computer} beats ${player}`;
//     }
// }

// Game logic

function checkWinner() {
    if (player === "✊" && computer === "✊") {
        return "It's a tie, Rock ties with Rock "
    } else if (player === "✋" && computer === "✋") {
        return "It's a tie, Paper ties with Paper";
    } else if (player === "✌️" && computer === "✌️") {
        return "It's a tie, Scissors ties with Scissors";
    } else if (player === "✊" && computer === "✌️") {
        return "You won! Rock beats Scissors";
    } else if (player === "✋" && computer === "✊") {
        return "You won! Paper beats Rock";
    } else if (player === "✌️" && computer === "✋") {
        return "You won! Scissors beats Paper";
    } else if (computer === "✊" && player === "✌️") {
        return "You lost! Scissors is beaten by Rock";
    } else if (computer === "✋" && paper === "✊") {
        return "You lost! Rock is beaten by Paper";
    } else if (computer === "✌️" && player === "✋") {
        return "You lost! Paper is beaten by Scissors";
    } else {
        return "You lost! Rock is beaten by Paper";
    }
}

// Restart game button

restartBtn.addEventListener("click", restartGame);

function restartGame() {
    playerText.textContent = `Player: ?`;
    computerText.textContent = "Computer: ?";
    resultText.textContent = "Result: ?";
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    btns.forEach(button => {
        button.disabled = false;
      });

    restartBtn.disabled = true;
    restartBtn.classList.add('restartBtn-disabled');
}
// Footer
const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear()



