const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
        initOption: document.querySelector(".init-option"),
        startButton: document.querySelector('.start'),
        gameOverScreen: document.querySelector('.game-over'),
    },
    values: {
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        lives: 3,
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
    },
};

const startGame = () => {
    state.view.startButton.style.display = 'none';
    state.view.initOption.style.display = 'none';
    state.actions.timerId = setInterval(randomSquare, 500);
    state.actions.countDownTimerId = setInterval(countDown, 1000);

    function init() {
        countDown();
        randomSquare();
        addListenerHitBox();
    }

    init();
}

const restartGame = () => {
    window.location.reload(false);
};

function playSound(volume = 1.0) {
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = volume;
    audio.play();
}

function countDown() {
    state.values.currentTime--;

    if (state.values.currentTime <= 0 || state.values.lives <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        if (state.values.lives <= 0) {
            alert("Game Over! Você perdeu todas as vidas. O seu resultado foi: " + state.values.result);
        } else {
            alert("Game Over! O seu resultado foi: " + state.values.result);
        }
        state.view.gameOverScreen.style.display = 'flex';
        state.view.initOption.style.display = 'flex';
    } else {
        state.view.timeLeft.textContent = state.values.currentTime;
    }
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");

    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound(0.1);
            } else {
                state.values.lives--;
                state.view.lives.textContent = state.values.lives;
                if (state.values.lives <= 0) {
                    // Se as vidas chegarem a zero, encerrar o jogo
                    clearInterval(state.actions.countDownTimerId);
                    clearInterval(state.actions.timerId);
                    alert("Game Over! Você perdeu todas as vidas. O seu resultado foi: " + state.values.result);
                    state.view.gameOverScreen.style.display = 'flex';
                    state.view.initOption.style.display = 'flex';
                }
            }
        });
    });
}

document.addEventListener('keypress', e => {
    const tecla = e.key;
    if (tecla === 'Enter') {
        startGame();
    };
});