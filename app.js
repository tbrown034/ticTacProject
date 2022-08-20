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
const vsComputerElement = document.getElementById("vsComputer")

///DOM Selectors Forms 
// const player1Input = document.getElementById("enterPlayer1").value;
const player2Input = document.getElementById("enterPlayer2").value;


/// DOM Selector Buttons
const playComputerButton = document.getElementById("playComputer");
const playHumanButton = document.getElementById("playHuman");

//Form Functions

function displayPlayer1() {
    let player1Input = document.getElementById("enterPlayer1").value;
    alert("The name of the text field is: " + player1Input);

}

// const Player1Name = () => {
//     return player1Input.innerHTML
// }

// const Player2Name = () => {
//     player2Input = document.getElementById("displayPlayer1").innerHTML
// }



///Button Functions

const playHumanClick = () => {
    if (vsComputerElement.style.display === "none"){
    vsComputerElement.style.display = "block";}
    else {vsComputerElement.style.display = "none"
}
}

const playComputerClick = () => {
    if (vsHumanElement.style.display === "none"){
        vsHumanElement.style.display = "block";}
        else {vsHumanElement.style.display = "none"
    }
    }

///Event Listeners
playHumanButton.addEventListener("click", playHumanClick);
playComputerButton.addEventListener("click", playComputerClick)










// Event Listeners




