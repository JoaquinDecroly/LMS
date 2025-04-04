// script.js
import Game from './Game.js';

window.onload = function () {
    const game = new Game('.cube');
    game.initializePlayers('Player 1', '.player1Btn', '#player1Score', 'Player 2', '.player2Btn', '#player2Score');
    game.loadState();

    // Event Listeners
    document.querySelector('.player1Btn').addEventListener('click', () => game.rollDice(game.player1));
    document.querySelector('.player2Btn').addEventListener('click', () => game.rollDice(game.player2));
};

