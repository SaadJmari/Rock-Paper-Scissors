function getComputerChoice() {
    num = Math.floor(Math.random()* 3) + 1;
    console.log(num);

    switch(num) {
        case 1:
            return "Rock";
        case 2: 
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
   let choice = prompt("Choose between: Rock, Paper or Scissors");


   while(choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
       choice = prompt("wrong! Choose between: Rock, Paper or Scissors");
   }
   return choice;
   
}

let humanScore = 0, computerScore = 0;