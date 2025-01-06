function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

// function getHumanChoice() {
//     let choice = prompt("Choose between: Rock, Paper or Scissors");


//     while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
//         choice = prompt("wrong! Choose between: Rock, Paper or Scissors");
//     }
//     return choice;

// }

let humanScore = 0, computerScore = 0;

let result = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {
    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice === "Rock") {
                console.log("it's a draw!");
                result.textContent = "it's a draw!";
                break;
            }
            else if (computerChoice === "Paper") {
                console.log("You lose this round! Paper beats Rock");
                result.textContent = "You lose this round! Paper beats Rock";
                computerScore++;
                break;
            }
            else {
                console.log("You win this round! Rock beats Scissors");
                result.textContent = "You win this round! Rock beats Scissors";
                humanScore++
                break;
            }
        case "paper":
            if (computerChoice === "Paper") {
                console.log("it's a draw!");
                result.textContent = "it's a draw!";
                break;
            }
            else if (computerChoice === "Scissors") {
                console.log("You lose this round! Scissors beats Paper");
                result.textContent = "You lose this round! Scissors beats Paper";
                computerScore++;
                break;
            }
            else {
                console.log("You win this round! Paper beats Rock");
                result.textContent = "You win this round! Paper beats Rock";
                humanScore++
                break;
            }
        case "scissors":
            if (computerChoice === "Scissors") {
                console.log("it's a draw!");
                result.textContent = "it's a draw!";
                break;
            }
            else if (computerChoice === "Rock") {
                console.log("You lose this round! Rock beats Scissors");
                result.textContent = "You lose this round! Rock beats Scissors";
                computerScore++;
                break;
            }
            else {
                console.log("You win this round! Scissors beats Paper");
                result.textContent = "You win this round! Scissors beats Paper";
                humanScore++
                break;
            }
    }
}

let humanChoice;
let computerChoice;

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

rock.addEventListener("click", () => {
    humanChoice = "rock";
    console.log(humanChoice)
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    playRound(humanChoice, computerChoice)
});
paper.addEventListener("click", () => {
    humanChoice = "paper";
    console.log(humanChoice)
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    playRound(humanChoice, computerChoice)
});
scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    console.log(humanChoice)
    computerChoice = getComputerChoice();
    console.log(computerChoice)
    playRound(humanChoice, computerChoice)
});



// function playGame() {
//     let round = 1;
//     for (let i = 0; i < 5; i++) {
//         const human = getHumanChoice();
//         const computer = getComputerChoice();
//         console.log("round: ", round);
//         playRound(human, computer);
//         round++;
//     }
//     if (humanScore > computerScore) {
//         console.log("Player: ", humanScore);
//         console.log("Computer: ", computerScore);
//         console.log("Congratulations!! You won the game");
//     }
//     else {
//         console.log("Player: ", humanScore);
//         console.log("Computer: ", computerScore);
//         console.log("You lost! better luck next time");
//     }
// }

// playGame();