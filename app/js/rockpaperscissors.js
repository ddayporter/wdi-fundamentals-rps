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
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The winner of this round is ' + winner);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The winner of this round is ' + winner);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        } else if (winner === 'tie') {
            console.log('Result was a tie. The score is still Player: ' + playerWins + ' to Computer: ' + computerWins);
        } else {
            console.log('Error');
            break;
        }
    }
    return [playerWins, computerWins];
}

playToFive();
