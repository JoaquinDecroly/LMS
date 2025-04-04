// Game.js
import Player from './Player.js';

class Game {
    constructor(cubeSelector) {
        this.cube = document.querySelector(cubeSelector);
        this.currentClass = '';
        this.player1 = null;
        this.player2 = null;
        this.player1Position = 0; // Posición inicial del jugador 1
        this.player2Position = 0; // Posición inicial del jugador 2
    }

    initializePlayers(player1Name, player1ButtonSelector, player1ScoreSpanSelector, player2Name, player2ButtonSelector, player2ScoreSpanSelector) {
        this.player1 = new Player(player1Name, player1ButtonSelector, player1ScoreSpanSelector);
        this.player2 = new Player(player2Name, player2ButtonSelector, player2ScoreSpanSelector);
    }

    rollDice(player) {
        const randomNumber = player.rollDice();
        this.updateCube(randomNumber);
        this.movePlayer(player, randomNumber);
        this.saveState();
    }

    movePlayer(player, randomNumber) {
        if (player === this.player1) {
            this.player1Position += randomNumber;
            this.updatePlayerPosition('player1', this.player1Position);
        } else {
            this.player2Position += randomNumber;
            this.updatePlayerPosition('player2', this.player2Position);
        }
    }

    updatePlayerPosition(player, position) {
        const playerCell = document.getElementById(`${player}-cell`);
        if (position <= 20) {
            playerCell.style.left = `${(position - 1) * 50}px`; // Ajusta la posición en el tablero
        }
    }

    updateCube(randomNumber) {
        const diceFaceClass = 'show-' + randomNumber;
        if (this.currentClass) {
            this.cube.classList.remove(this.currentClass);
        }
        this.cube.classList.add(diceFaceClass);
        this.currentClass = diceFaceClass;
    }

    saveState() {
        const state = {
            valor: this.currentClass.split('-')[1],
            player1Score: this.player1.score,
            player2Score: this.player2.score,
            player1Position: this.player1Position,
            player2Position: this.player2Position
        };
        localStorage.setItem('ultimoEstado', JSON.stringify(state));
    }

    loadState() {
        const recoveredState = JSON.parse(localStorage.getItem('ultimoEstado'));
        if (recoveredState) {
            this.updateCube(recoveredState.valor);
            this.player1.score = recoveredState.player1Score || 0;
            this.player2.score = recoveredState.player2Score || 0;
            this.player1Position = recoveredState.player1Position || 0;
            this.player2Position = recoveredState.player2Position || 0;
            this.player1.scoreSpan.textContent = this.player1.score;
            this.player2.scoreSpan.textContent = this.player2.score;
            this.updatePlayerPosition('player1', this.player1Position);
            this.updatePlayerPosition('player2', this.player2Position);
        } else {
            this.rollDice(this.player1);
        }
    }
}

export default Game;