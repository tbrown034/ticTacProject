// state and constants
let initialState;
const renderState = () => {

}




let gameState = ["", "", "", "", "", "", "", "", ""];
const statusDisplay = document.querySelector('.game--status');
let currentPlayer = "xPlayer";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// DOM Selectors Areas
const boardElement = document.getElementById("board");
const vsHumanElement = document.getElementById("vsHuman");
const vsComputerElement = document.getElementById("vsComputer");
const cellElement = document.getElementsByClassName("cell").value
const cellEle = document.querySelectorAll(".cell")
// DOM Selectors Forms 
const playerNames = document.getElementById("vsHumanForm").value;
const player1Name = document.getElementById("enterPlayer1").value;
const player2Name = document.getElementById("enterPlayer2").value;
const playerSoloName = document.getElementById("enterPlayerSolo").value;
/// DOM Selector 
const playComputerButton = document.getElementById("playComputer");
const playHumanButton = document.getElementById("playHuman");
// const resetButton = document.getElementById("resetButton");
// const resetButton = document.querySelectorAll("#resetButton")

//// Helper Functions
// Turns
const playerChange = () => {
  if (currentPlayer === 'xPlayer') {
    currentPlayer = 'oPlayer'}
    else {currentPlayer = 'xPlayer'}
    statusDisplay.innerHTML = currentPlayerTurn()
  }
// Clickable cells
boardElement.addEventListener("click", event => {
  if (event.target.innerHTML == 'x' || event.target.innerHTML == 'o'){
  return
  }
  if (currentPlayer === 'xPlayer') {
    event.target.innerHTML = "x";
    playerChange()
    }
  else {
    event.target.innerHTML = "o";
    playerChange()
  }})
//Restart  
  const resetAll = () => {
    currentPlayer = "xPlayer";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
  }
//Name or Display Functions
function displayPlayersFunction () {
    let player1Name = document.getElementById("enterPlayer1").value;
    let player2Name = document.getElementById("enterPlayer2").value;
    document.getElementById("playerNames").innerText = "Welcome, " + player1Name + " and " + player2Name + "! Let's get ready to play! " + player1Name + " will go first as X. " + player2Name + " will go second as O. Good luck to you both!";
   }
function displayPlayerFunction () {
    let playerSoloName = document.getElementById("enterPlayerSolo").value;
    document.getElementById("playerName").innerText = "Welcome, " + playerSoloName + "! Let's get ready to play the computer! " + playerSoloName + " you'll be starting first as X. Good luck to you!";
   }
//Button Functions
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
// boostrapping
