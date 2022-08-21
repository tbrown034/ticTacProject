// state
// const state = {}
// const initialState = {
//     players: ['x', 'o'],
//     board: [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//   }
// DOM Selectors Areas
const boardElement = document.getElementsByClassName("board");
const vsHumanElement = document.getElementById("vsHuman");
const vsComputerElement = document.getElementById("vsComputer");

// DOM Selectors Forms 
const playerNames = document.getElementById("vsHumanForm").value;
const player1Name = document.getElementById("enterPlayer1").value;
const player2Name = document.getElementById("enterPlayer2").value;
const playerSoloName = document.getElementById("enterPlayerSolo").value;

/// DOM Selector Buttons
const playComputerButton = document.getElementById("playComputer");
const playHumanButton = document.getElementById("playHuman");

///Button and Form Functions

function displayPlayersFunction () {
    let player1Name = document.getElementById("enterPlayer1").value;
    let player2Name = document.getElementById("enterPlayer2").value;
    document.getElementById("playerNames").innerText = "Welcome, " + player1Name + " and " + player2Name + "! Let's get ready to play! Good luck to you both!";
   }

   function displayPlayerFunction () {
    let playerSoloName = document.getElementById("enterPlayerSolo").value;
    document.getElementById("playerName").innerText = "Welcome, " + playerSoloName + "! Let's get ready to play the computer! Good luck to you!";
   }

const playHumanClick = () => {
    if (vsComputerElement.style.display === "none"){
    vsComputerElement.style.display = "block";}
    else {vsComputerElement.style.display = "none"}}

const playComputerClick = () => {
    if (vsHumanElement.style.display === "none"){
        vsHumanElement.style.display = "block";}
        else {vsHumanElement.style.display = "none"}}

///Event Listeners

playHumanButton.addEventListener("click", playHumanClick);
playComputerButton.addEventListener("click", playComputerClick);
// vsHumanSubmit.addEventListener("click", displayPlayers);