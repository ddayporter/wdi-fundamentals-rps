////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
     if (playerMove === 'rock') {
    	if (computerMove === 'rock') {
    	winner = 'tie';
    	} else if (computerMove === 'paper') {
    	winner = 'computer';
    	} else {
    	winner = 'player';
    	}
    } else if (playerMove === 'paper') {
    	if (computerMove === 'paper') {
    		winner = 'tie';
    	} else if (computerMove === 'scissors') {
			winner = 'computer';
		} else {
    		winner = 'player';
    	}
    } else if (playerMove === 'scissors') {
    	if (computerMove === 'scissors') {
    			winner = 'tie';
    	} else if (computerMove === 'rock') {
    			winner = 'computer';
    	} else {
    			winner = 'player';
    	}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

