const cards = document.querySelectorAll('.card');
document.querySelector(".counter").onclick = () => {
    console.log("test")
    document.querySelectorAll('.card').forEach((card) => card.classList.add("flip"))
}

let turnedOver = false;
let lockGame = false;
let firstChoice, secondChoice;

function flipCard() {
    if (lockGame) return;
    if (this === firstChoice) return;

    this.classList.add('flip');

    if (!turnedOver) {
        turnedOver = true;
        firstChoice = this;

        return;
    }
    secondChoice = this;
    matched();
}

let guessCounter = 0
var isFinished = false

function matched() {

    guessCounter += 1
    document.querySelector('.counter').innerText = guessCounter;
    let isMatch = firstChoice.dataset.framework === secondChoice.dataset.framework;
    isMatch ? freezeCards() : unflipCards();

    if (isMatch === true) {

        document.querySelectorAll('.card.flip').forEach((card) => card.style.visibility = "hidden")
        if (document.querySelectorAll('.flip').length === 24) {
            document.getElementById('gameWrapper').innerHTML = `<div class="wrapper"><h2 class="win">CONGRATULATIONS!!</h2><a class="btn-win" href="game.html">Play Again</a></div>`
            isFinished = true
            timeleft = "Finished"

        }
    }
}

function freezeCards() {
    firstChoice.removeEventListener('click', flipCard);
    secondChoice.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockGame = true;
    setTimeout(() => {
        firstChoice.classList.remove('flip');
        secondChoice.classList.remove('flip');
        resetBoard();
    }, 600);
}

function resetBoard() {
    [turnedOver, lockGame] = [false, false];
    [firstChoice, secondChoice] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// #####################################################################################################
var timeleft = 60;
var startGame = true;

document.addEventListener('click', function (event) {
    if (startGame === true) {
        var countdownTimer = setInterval(function () {
            document.getElementById("countdown").innerHTML = timeleft;
            if (isFinished === false) {
                timeleft -= 1;
                if (timeleft <= -2) {
                    clearInterval(countdownTimer);
                    document.getElementById("countdown").innerHTML = "UNLUCKY"
                    document.getElementById('gameWrapper').innerHTML = `<div class="wrapper"><h2 class="over">GAME OVER!!</h2><a class="btn-over" href="game.html">Try Again</a></div>`
                }
            }
        }, 1000);
        startGame = false;
    }
}, false);

let clickCount = document.getElementsByClassName(".counter"),
    count = -1;
clickCount.unflipCards() = function () {
    count += 1;
    clickCount.innerTEXT = count;
}