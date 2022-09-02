// state and constants
const state = {};
const resetState = () => {
  state.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]]
  players: ['xPlayer', 'oPlayer']
  }

let currentPlayer = 'x'

const game = {
    xTurn: true,
    xState: [],
    oState: [],
  }

  const renderBoard = () => {}
  const resetBoard = () => {    
  }

  const resetAll = () => {
      window.location.reload()
  }
// DOM Selectors Areas
const boardElement = document.getElementById("board");
const vsHumanElement = document.getElementById("vsHuman");
const vsComputerElement = document.getElementById("vsComputer");
const cellElement = document.getElementsByClassName("cell")
// DOM Selectors Forms 
const playerNames = document.getElementById("vsHumanForm").value;
const player1Name = document.getElementById("enterPlayer1").value;
const player2Name = document.getElementById("enterPlayer2").value;
const playerSoloName = document.getElementById("enterPlayerSolo").value;
/// DOM Selector Buttons
const playComputerButton = document.getElementById("playComputer");
const playHumanButton = document.getElementById("playHuman");
const resetButton = document.getElementById("resetButton");

// Clickable cells
boardElement.addEventListener("click", event => {
  if (event.target.innerHTML == 'x' || event.target.innerHTML == 'o'){
  return
  }
  if (xTurn=true) {
    event.target.innerHTML = "x";
  }
  if (xTurn=false) {
    event.target.innerHTML = "o";
  }})
// Who's turn

whoseTurnvsPlayers =
  


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
resetButton.addEventListener("click", playComputerClick);
// document.addEventListener("click", event => {
//   const target = event.target;
//   target.classList.add(game.xTurn ? 'x' : 'o')
// })


// boostrapping

