// state
const state = {};
const resetState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ] 
  }

const game = {
    xTurn: true,
    xState: [],
    oState: [],
  }
  

  // Note: Need to understand why/how this works better
  document.addEventListener('click', event => { 
    const target = event.target;
    const cellValue = target.dataset.value;
    game.xTurn === true
        ? game.xState.push(cellValue)
        : game.oState.push(cellValue)
        target.classList.add('disabled')
        target.classList.add(game.xTurn ? 'x' : 'o')
        game.xTurn = !game.xTurn   
    }
  )

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

const resetBoard = () => {    
}

const resetAll = () => {
    window.location.reload()
}

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


