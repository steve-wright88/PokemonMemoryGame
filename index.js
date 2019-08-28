const cards = document.querySelectorAll('.card');
document.querySelector(".counter").onclick = () => {
    console.log("test")
    document.querySelectorAll('.card').forEach((card) => card.classList.add("flip"))
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    secondCard = this;
    matched();
}

let guessCounter = 0
var isFinished = false

function matched() {

    guessCounter += 1
    document.querySelector('.counter').innerText = guessCounter;
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();

    if (isMatch === true) {

        document.querySelectorAll('.card.flip').forEach((card) => card.style.visibility = "hidden")
        if (document.querySelectorAll('.flip').length === 24) {
            document.getElementById('gameWrapper').innerHTML = `<div class="wrapper"><h2 class="win">CONGRATULATIONS!!</h2><a class="btn-win" href="game.html">Play Again</a></div>`
            isFinished = true
            timeleft = "Finished"

        }
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 600);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// #####################################################################################################
var timeleft = 5;
var startGame = true;

document.addEventListener('click', function (event) {
    if (startGame === true) {
        var downloadTimer = setInterval(function () {
            document.getElementById("countdown").innerHTML = timeleft;
            if (isFinished === false) {
                timeleft -= 1;
                if (timeleft <= 0) {
                    clearInterval(downloadTimer);
                    document.getElementById("countdown").innerHTML = "Finished"
                    document.getElementById('gameWrapper').innerHTML = `<div class="wrapper"><h2 class="over">GAME OVER!!</h2><a class="btn-over" href="game.html">Try Again</a></div>`
                }
            }
        }, 1000);
        startGame = false;
    }
}, false);

let clickCount = document.getElementsByClassName(".counter"),
    count = 0;
clickCount.unflipCards() = function () {
    count += 1;
    clickCount.innerTEXT = count;
}