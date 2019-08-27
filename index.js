// card data
const cardsArray = [{
        name: 'pikachu',
        img: './images/pikachu.png',
    },
    {
        name: 'onix',
        img: './images/onix.png',
    },
    {
        name: 'mewtwo',
        img: './images/mewtwo.png',
    },
    {
        name: 'mew',
        img: './images/mew.png',
    },
    {
        name: 'machop',
        img: './images/machop.png',
    },
    {
        name: 'eevee',
        img: './images/eevee.png',
    },
    {
        name: 'cubone',
        img: './images/cubone.png',
    },
    {
        name: 'abra',
        img: './images/abra.png',
    },
    {
        name: 'charmander',
        img: './images/charmander.png',
    },
    {
        name: 'bulbasaur',
        img: './images/bulbasaur.png',
    },
    {
        name: 'snorlax',
        img: './images/snorlax.png',
    },
    {
        name: 'squirtle',
        img: './images/squirtle.png',
    },
]

const game = document.querySelector('.game')

const grid = document.createElement('section') //var element = document.createElement(tagName)
grid.classList.add('grid')
game.appendChild(grid) //node.appendChild(node) places the grid section withing the game section

let gameGrid = cardsArray.concat(cardsArray) // this makes an array of cardsArray * 2
gameGrid.sort(() => 0.5 - Math.random()) // not 100% sure what all this does but it's randomizing the cards every page refresh

gameGrid.forEach(function (item) { // this loops through the gamesGrid array and creates a div for everyone and assigns it the class of card
    const card = document.createElement('div')

    card.classList.add('card')
    // card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`

    grid.appendChild(card) // this places the card divs within the grid section
})

let firstGuess = ''
let secondGuess = ''
let count = 0

grid.addEventListener('click', function (event) {
    let clicked = event.target

    if (clicked === '.card') {
        return true;
    }
    if (count < 2) {
        count++
        clicked.classList.add('selected')
    }
})