/**
 * Project: Blackjack Game - Part 1 Requirements and Planning - Javascript In Depth
 * https://www.youtube.com/watch?v=m31fXmQDcPA
 */

const cards = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Queen: 10,
  King: 10,
  Jack: 10,
  Ace: 1,
};

function generateSuit(suit) {
  return Object.keys(cards).map((card) => ({ card, suit }));
}

function generateDeck() {
  return [
    //
    ...generateSuit('Hearts'),
    ...generateSuit('Clubs'),
    ...generateSuit('Diamonds'),
    ...generateSuit('Spades'),
  ];
}

function drawCard(deck, person) {
  const randomCardIndex = Math.floor(Math.random() * deck.length);

  const { card, suit } = deck[randomCardIndex];
  console.log(`${person}'s drawing a card..\nIt's ${suit}'s ${card}\n`);

  return deck.splice(randomCardIndex, 1)[0];
}

function checkScore(hand) {
  return hand.reduce((score, { card: cardName }) => score + cards[cardName], 0);
}

const deck = generateDeck();
// console.log(deck);

const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(deck, 'Player'));
playerHand.push(drawCard(deck, 'Player'));
dealerHand.push(drawCard(deck, 'Dealer'));
dealerHand.push(drawCard(deck, 'Dealer'));

console.log(`# Starting Player Score: ${checkScore(playerHand)}`);
console.log(`# Starting Dealer Score: ${checkScore(dealerHand)}\n`);

while (true) {
  playerHand.push(drawCard(deck, 'Player'));
  if (checkScore(playerHand) === 21) {
    console.log('Player wins!');
    break;
  }
  if (checkScore(playerHand) > 21) {
    console.log('Player loses!');
    break;
  }

  dealerHand.push(drawCard(deck, 'Dealer'));
  if (checkScore(dealerHand) === 21) {
    console.log('Dealer wins!');
    break;
  }
  if (checkScore(dealerHand) > 21) {
    console.log('Dealer loses!');
    break;
  }
}

console.log(`\n# Ending Player Score: ${checkScore(playerHand)}`);
console.log(`# Ending Dealer Score: ${checkScore(dealerHand)}`);
