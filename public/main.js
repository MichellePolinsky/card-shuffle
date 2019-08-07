// array suits

const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']

//array values

const values = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

const deck = []
const newDeck = []

console.log(deck)

const main = () => {
  for (let suitCall = 0; suitCall < suits.length; suitCall++) {
    for (let valuesCall = 0; valuesCall < values.length; valuesCall++) {
      // TODO: make the deck
      const newSuit = suits[suitCall]
      const newValue = values[valuesCall]

      deck.push(`${newValue} ${'of'} ${newSuit}`)
    }
  }

  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
  if (document.querySelector('h1.card-shuffle')) {
    document.querySelector('h1.card-shuffle').textContent = 'Card Shuffle!'
  }
}
const dealtCard = () => {
  console.log('Dealt')
  if (deck.length === 0) {
    console.log('out-of-cards')
  } else {
    const newCard = deck.pop()
    document.querySelector('.card').textContent = newCard

    //document.querySelector(".card").textContent = newCard

    newDeck.push(newCard)
  }
}

document.querySelector('.deal-button').addEventListener('click', dealtCard)

document.addEventListener('DOMContentLoaded', main)
