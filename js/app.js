/*-------------------------------- Constants --------------------------------*/
const playerX = 1
const playerO = -1

const winningCombos = [
  win1 = [0, 1, 2],
  win2 = [3, 4, 5],
  win3 = [6, 7, 8],
  win4 = [0, 3, 6],
  win5 = [1, 4, 7],
  win6 = [2, 5, 8],
  win7 = [0, 4, 8],
  win8 = [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let gameBoard
let playerTurn
let isWinner

/*------------------------ Cached Element References ------------------------*/
const allSquares = Array.from(document.querySelectorAll('.square'))
const gameMessage = document.getElementById('message')
const resetBtn = document.querySelector('#reset-button')



/*----------------------------- Event Listeners -----------------------------*/
//forEach that 
allSquares.forEach(square => 
  square.addEventListener('click', handleClick))




/*-------------------------------- Functions --------------------------------*/

init()
function init (){
  gameBoard = [1, 1, 1, null, null, null, null, null, null]
  playerTurn = 1
  isWinner = null
  gameMessage.textContent = "Player X is first. Make your selection!"
  render()
}

function render (){
  gameBoard.forEach((square, idx) => {
    pushLetter = document.getElementById(`sq${idx}`)
    if (square === 1) {
      pushLetter.innerHTML = 'X'
      gameMessage.textContent = "Player O's turn, make your selection!"
      allSquares[idx].style.backgroundColor = 'lightblue'
    } else if (square === -1) {
      pushLetter.innerHTML = 'O'
      gameMessage.textContent = "Player X's turn, make your selection!"
      allSquares[idx].style.backgroundColor = 'pink'
    } else {
      square = null
    }   
  })
  renderWin()
}

//3.3.2
// if (!isWinner) {
//   // indicate whose turn it is

// } else if (winner === "T") {
//   // indicate a tie game
// } else {
//   // congrats to the winner!
//   gameMessage.textContent ='Congrats '
// }

function renderWin (){
   // loop through winnerCombos to see if any absolute value of any array combo is equal to 3
   winningCombos.forEach(winCombo => {
     let total = 0
     winCombo.forEach(idx => {
       total = total + gameBoard[idx]
     })
     console.log(total)
   })
}

function renderTurn (){
  
}


function handleClick (event){
  console.log(event.target.id)
   
}




