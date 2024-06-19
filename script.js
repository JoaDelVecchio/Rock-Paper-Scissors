
// function getUserChoice() {
    //     const userChoice = prompt("What is your pick? Rock/Paper/Scissors or '0' if you want to stop playing");
    //     return userChoice;
    // }
    
    var result = document.querySelector("#choices").appendChild(document.createElement("h1"))
    var scores = document.querySelector("#choices").appendChild(document.createElement("h2"))
    var userScore = 0;
    var computerScore = 0;
    
function getComputersChoice()
    {
        const choices = ["Rock","Paper","Scissors"];
        return choices[Math.floor(Math.random()*choices.length)];
    }

function checkWinner(user1, computer) 
    {
        if (user1 == "restart")
            {
                scores.textContent = "";
                result.textContent = "";
                userScore = 0;
                computerScore = 0;
            }
        else if (user1 === computer) {
            result.textContent = "It is a draw";
            scores.textContent = `Your score:${userScore}, Computer Score: ${computerScore}`;
        } else if (
            (user1 === 'rock' && computer === 'scissors') ||
            (user1 === 'paper' && computer === 'rock') ||
            (user1 === 'scissors' && computer === 'paper')
        ) {
        result.textContent = `You Won! ${user1[0].toUpperCase() + user1.slice(1)} beats ${computer[0].toUpperCase() + computer.slice(1)}`;
            userScore++;
            scores.textContent = `Your score:${userScore}, Computer Score: ${computerScore}`;
        } else if (
            (user1 === 'rock' && computer === 'paper') ||
            (user1 === 'paper' && computer === 'scissors') ||
            (user1 === 'scissors' && computer === 'rock')
        ) {
        result.textContent = `You Lost! ${computer[0].toUpperCase() + computer.slice(1)} beats ${user1[0].toUpperCase() + user1.slice(1)}`;
            computerScore++;
            scores.textContent = `Your score:${userScore}, Computer Score: ${computerScore}`;
        } else {
            console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
            scores.textContent = `Your score:${userScore}, Computer Score: ${computerScore}`;
        }

        if (userScore == 5 || computerScore == 5)
            {
                if (userScore > computerScore)
                {
                    result.textContent = "You Won The Game :)"
                }
                else
                {
                    result.textContent = "You Lost The Game :("
                }
            userScore = 0;
            computerScore = 0;
            }
    }

function playGame(userChoice,computersChoice)
    {
        userChoice = userChoice.toLowerCase();
        computersChoice = computersChoice.toLowerCase();
        checkWinner(userChoice,computersChoice);
    }

choices = document.querySelectorAll("button");
choices.forEach((choice)=>choice.addEventListener("click",()=>playGame(choice.textContent,getComputersChoice())));