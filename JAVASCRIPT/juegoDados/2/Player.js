// Player.js
class Player {
    constructor(name, buttonSelector, scoreSpanSelector) {
        this.name = name;
        this.button = document.querySelector(buttonSelector);
        this.scoreSpan = document.querySelector(scoreSpanSelector);
        this.score = 0;
        this.button.addEventListener('click', () => this.rollDice());
    }

    rollDice() {
        const randomNumber = this.getRandomInt(1, 7);
        this.updateScore(randomNumber);
        return randomNumber;
    }

    updateScore(value) {
        this.score += value;
        this.scoreSpan.textContent = this.score;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default Player;