# Rock Paper Scissors Game

## Project Overview

This is a simple Rock Paper Scissors game implemented using HTML and JavaScript. Players can choose between Rock, Paper, or Scissors, and the computer makes a random choice. The game keeps track of scores and announces the winner when either the player or the computer reaches 5 points.

## Technologies Used

- **HTML**: Used to structure the web page and create the buttons for user interaction.
- **JavaScript**: Used for game logic, handling user input, and updating the DOM with the game results and scores.

## Features

- User can choose Rock, Paper, or Scissors by clicking the respective button.
- Computer randomly selects Rock, Paper, or Scissors.
- The game determines the winner based on traditional Rock Paper Scissors rules.
- Scores are updated and displayed after each round.
- The game announces the overall winner when either the player or the computer reaches 5 points.
- A restart button is included to reset the scores and start a new game.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click on one of the buttons (`Rock`, `Paper`, or `Scissors`) to make your choice.
3. The game will display the result of the round and update the scores.
4. The first to reach 5 points wins the game.
5. Click the `Restart` button to reset the game and play again.

## Code Explanation

- **HTML**: Defines the structure of the game interface, including the buttons and the areas to display the game results and scores.
- **JavaScript**: 
  - `getComputersChoice()`: Randomly selects Rock, Paper, or Scissors for the computer.
  - `checkWinner(user1, computer)`: Compares the user's choice with the computer's choice to determine the winner and updates the scores.
  - `playGame(userChoice, computersChoice)`: Converts the user's and computer's choices to lowercase and checks the winner.
  - Event listeners are added to each button to handle user input and play the game.
