'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
let currentPlayer = currentScore0El;

const switchPlayer = () => {
  currentScore = 0;
  currentPlayer.textContent = 0;
  if (currentPlayer === currentScore0El) {
    currentPlayer = currentScore1El;

    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    currentPlayer = currentScore0El;

    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

const newGame = function () {
  player0.classList.contains('player--winner')
    ? player0.classList.remove('player--winner')
    : player1.classList.remove('player--winner');
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  dice.classList.add('hidden');
  currentPlayer = currentScore0El;
  currentScore = 0;
};

buttonRoll.addEventListener('click', function () {
  const randomValue = Math.floor(Math.random() * 6) + 1;

  // display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${randomValue}.png`;

  //logic
  if (randomValue != 1) {
    currentScore += randomValue;
    currentPlayer.textContent = currentScore;
  } else {
    switchPlayer();
  }
});

buttonHold.addEventListener('click', function () {
  if (currentPlayer === currentScore0El) {
    score0El.textContent = Number(score0El.textContent) + currentScore;
    if (Number(score0El.textContent) >= 100) {
      player0.classList.add('player--winner');
      //newGame();
    } else switchPlayer();
  } else {
    score1El.textContent = Number(score1El.textContent) + currentScore;
    if (Number(score1El.textContent) >= 100) {
      player1.classList.add('player--winner');
      //newGame();
    }
    switchPlayer();
  }
});

buttonNew.addEventListener('click', function () {
  newGame();
});
