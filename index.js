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
  randomCard();
  hand.push(selectedNumber);
  handCount = handCount + selectedNumber;
}

function folded() {
  if (gameStarted == true && blackJack == false && bust == false) {
    fold = true;

    if (handCount <= 20) {
      let remainder = 21 - handCount;
    }
  }
}

function winCondition() {
  if (blackJack == false && fold == false && bust == false) {
    if (handCount == 21) {
      blackJack = true;
    } else if (handCount > 21) {
      bust = true;
    } else {
      console.log("Dare to continue?");
    }
  }
}

function addToList() {
  let node = document.createElement("li");
  node.appendChild(document.createTextNode(`Cards in hand: ${hand}`));
  node.appendChild(document.createTextNode(`Sum: ${handCount}`));

  document.querySelector("ol").appendChild(node);
}

// function drawAndAdd(){
//     let a = draw();
//     let b = addToList();
//    return a&&b
// }

startButton.onClick = () => start();
restartButton.onClick = () => restart();
drawButton.onClick = () => draw();
addToList();
foldButton.onClick = () => fold();
