// state

// const state = {}

// const player1Name = document.getElementById("enterPlayer1").value;
// console.log(player1Name)
// const player2Name = document.getElementById("enterPlayer2").value;


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
const player1Input = document.getElementById("enterPlayer1").value;
const player2Input = document.getElementById("enterPlayer2").value;

/// DOM Selector Buttons
const playComputerButton = document.getElementById("playComputer");
const playHumanButton = document.getElementById("playHuman");



///Button and Form Functions

const displayPlayers = () => {
    let player1Name = document.getElementById("enterPlayer1").value;
    let player2Name = document.getElementById("enterPlayer2").value;
    let playersDisplay = "Player 1 is " + player1Name + " and Player 2 is " + player2Name;
    alert (playersDisplay) }

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
vsHumanSubmit.addEventListener("click", displayPlayers);











// Event Listeners




