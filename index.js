"use strict";
console.log("hellos");

//dom
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const drawButton = document.getElementById("draw");
const foldButton = document.getElementById("fold");
const playerInput = document.getElementById("players");
const list = document.getElementById("list");

//variables
let handCount = 0;
let listOfCards = [
  1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7,
  7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11,
  11, 11, 11, 11,
];
let selectedNumber = 0;
let gameStarted = false;
let blackJack = false;
let bust = false;
let fold = false;
let hand = [];

// //functions

function start() {
  gameStarted = true;
  let node = document.createElement("li");
  node.innerHTML = `GAME STARTED`;
  document.querySelector("ol").append(node);
}

function restart() {
  window.location.reload();
  console.log("restart");
}

function randomCard() {
  let length = listOfCards.length;
  let randomIndex = Math.floor(Math.random() * length);
  selectedNumber = listOfCards[randomIndex];
  listOfCards.splice(randomIndex, 1);
}

function draw() {
  if (
    gameStarted == true &&
    blackJack == false &&
    bust == false &&
    fold == false
  ) {
    randomCard();
    hand.push(selectedNumber);
    handCount = handCount + selectedNumber;
    console.log("drawing");
  }
}

function folded() {
  if (gameStarted === true && blackJack === false && bust === false) {
    fold = true;
    let node = document.createElement("li");
    node.innerHTML = `You folded, you were ${
      21 - handCount
    } away from Blackjack`;
    document.querySelector("ol").append(node);
  }
}

function winCondition() {
  if (blackJack === false && fold === false && bust === false) {
    if (handCount == 21) {
      blackJack = true;
      let node = document.createElement("li");
      node.innerHTML = `NICE YOU WIN`;
      document.querySelector("ol").append(node);
    } else if (handCount > 21) {
      bust = true;
      let node = document.createElement("li");
      node.innerHTML = `GAME OVER YOU LOSE`;
      document.querySelector("ol").append(node);
    } else {
      let node = document.createElement("li");
      node.innerHTML = `Dare to draw?`;
      document.querySelector("ol").append(node);
    }
  }
}

function addToList() {
  if (bust === false && fold === false) {
    let node = document.createElement("li");
    node.innerHTML = `Cards in hand: ${hand}` + "<br>" + `Sum: ${handCount}`;
    document.querySelector("ol").append(node);
  }
}

startButton.addEventListener("click", start);
restartButton.addEventListener("click", restart);
drawButton.addEventListener("click", draw);
drawButton.addEventListener("click", addToList);
drawButton.addEventListener("click", winCondition);
foldButton.addEventListener("click", folded);
