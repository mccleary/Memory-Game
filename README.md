# Memory Game Project

A complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!

Single-page web app built with HTML,CSS and JavaScript, Google Fonts, W3 Modal, Font Awesome

## How The Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.

### Click here for [Demo](https://mccleary.github.io/Memory-Game/)


## Game Functionality
The real-life game, players flip over cards to locate the pairs that match The goal is to recreate this effect in your project. There are a couple of interactions that you'll need to handle:

* Flipping cards
* What happens when cards match
* What happens when cards do not match
* When the game finishes

************************************************************

# Development Strategy

It's very important that you plan your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick by brick.

* Start by building a very simple grid of cards.
  * Don't worry about styling, just get something clickable on the page.
  * Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?

* Add the functionality to handle clicks.
  * This should reveal the hidden side of each card.

* Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?

* Work on the winning condition. How does your game “know” if a player has won?

* We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.

# Demo Here:
[Live Demo](https://mccleary.github.io/Memory-Game/)
