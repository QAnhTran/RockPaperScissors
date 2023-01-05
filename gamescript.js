

const choice = ['Rock', 'Paper', 'Scissors'];
let pChoice = document.querySelectorAll('.player')
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const score = document.querySelector('.score');
let i = 0;
let playerPts = 0;
let computerPts = 0;

score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";

pChoice.forEach(option => {
    option.addEventListener('click', function () {
        
        rpsGame(this.innerText ,getComputerChoice(choice));
        i++;
        if (i === 10) {
            results();
        }
    })
});



function results() {
    result.innerHTML = "After " + i + " games, the score is: Player " + playerPts + " - " + computerPts + " Computer";
if(playerPts === 5 || playerPts > computerPts)  {
            winner.innerHTML = "You won the game! Congratulations!";
        } else if (computerPts === 5 || computerPts > playerPts) {
            winner.innerHTML = "You lost, better luck next time!";
        } else {
            winner.innerHTML = "Draw game!";
        } 
}


function randomNum(num1,num2) {
    let res = Math.floor(Math.random(num1) * num2);
    return res;
}

function getComputerChoice(arr) {
    let cpu = arr[randomNum(0,arr.length)];
    console.log(cpu);
    return cpu;
}


function rpsGame(player, opponent) {
    let game;

    if (player.toUpperCase() == opponent.toUpperCase()) {
        game = alert("It's a draw!");
    } else if (player.toLowerCase() == "rock" && opponent.toLowerCase() == "paper") {
        game = alert("You lose, paper beats rock");
        computerPts++;
        score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";
    } else if (player.toLowerCase() == "scissors" && opponent.toLowerCase() == "rock") {
        game = alert("You lose, rock beats scissor");
        computerPts++;
        score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";
    } else if (player.toLowerCase() == "paper" && opponent.toLowerCase() == "scissors") {
        game = alert("You lose, scissor beats paper");
        computerPts++;
        score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";
    } 
      else if (player.toLowerCase() == "rock" && opponent.toLowerCase() == "scissors") {
        game = alert("You win, rock beats scissor");
        playerPts++;
        score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";
    } else if (player.toLowerCase() == "paper" && opponent.toLowerCase() == "rock") {
        game = alert("You win, paper beats rock");
        playerPts++;
        score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";
    } else if (player.toLowerCase() == "scissors" && opponent.toLowerCase() == "paper") {
        game = alert("You win, scissor beats paper");
        playerPts++;
        score.textContent = "Player " + playerPts + " - " + computerPts + " Computer";
    } 
    return game;
}
