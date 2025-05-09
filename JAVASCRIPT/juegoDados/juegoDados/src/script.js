let cube = document.querySelector('.cube');
let rollBtn = document.querySelector('.rollBtn');
let rulesBtn = document.getElementById('rulesBtn');
let rulesContainer = document.getElementById('rules');
let currentClass = '';
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

rollBtn.addEventListener('click', rollDice);
rulesBtn.addEventListener('click', toggleRules);

function rollDice() {
    let randNum = getRandomInt(1, 7);
    let showClass = 'show-' + randNum;

    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
    

    // Actualizar la puntuación
    if (currentPlayer === 1) {
        player1Score += randNum;
        document.getElementById('score1').innerText = 'Jugador 1: ' + player1Score + ' puntos';

        // Si el jugador 1 saca un 6, se queda en su turno
        if (randNum !== 6) {
            currentPlayer = 2;
            document.getElementById('turn').innerText = 'Turno de Jugador 2';
        }
    } else {
        player2Score += randNum;
        document.getElementById('score2').innerText = 'Jugador 2: ' + player2Score + ' puntos';

        // Si el jugador 2 saca un 6, se queda en su turno
        if (randNum !== 6) {
            currentPlayer = 1;
            document.getElementById('turn').innerText = 'Turno de Jugador 1';
        }
    }

    // Comprobar si hay un ganador
    if (player1Score >= 20) {
        alert('¡Jugador 1 gana!');
        resetGame();
    } else if (player2Score >= 20) {
        alert('¡Jugador 2 gana!');
        resetGame();
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    document.getElementById('score1').innerText = 'Jugador 1: 0 puntos';
    document.getElementById('score2').innerText = 'Jugador 2: 0 puntos';
    document.getElementById('turn').innerText = 'Turno de Jugador 1';
    cube.classList.remove(currentClass);
    currentClass = '';
}

function toggleRules() {
    if (rulesContainer.style.display === 'none') {
        rulesContainer.style.display = 'block';
        rulesBtn.innerText = 'Ocultar Normas';
    } else {
        rulesContainer.style.display = 'none';
        rulesBtn.innerText = 'Mostrar Normas';
    }
}