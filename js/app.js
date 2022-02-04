/*-------------------------------- Constants --------------------------------*/
const players = {
  '1': {
    score: 0
  },
  '-1': {
    score: 0,
  }
}

const winningCombos = [
  win1 = [sq0, sq1, sq2],
  win2 = [sq3, sq4, sq5],
  win3 = [sq6, sq7, sq8],
  win4 = [sq0, sq3, sq6],
  win5 = [sq1, sq4, sq7],
  win6 = [sq2, sq5, sq8],
  win7 = [sq0, sq4, sq8],
  win8 = [sq2, sq4, sq6]
]


/*---------------------------- Variables (state) ----------------------------*/
let gameBoard
let playerTurn = 1
let isWinner

/*------------------------ Cached Element References ------------------------*/
const allSquares = document.querySelectorAll('.square')
const gameMessage = document.getElementById('message')
const resetBtn = document.querySelector('#reset-button')



/*----------------------------- Event Listeners -----------------------------*/
//forEach that 
// allSquares.forEach(square => 
//   square.addEventListener('click', makeChoice))

  document.querySelector('.board').addEventListener('click',makeChoice)

/*-------------------------------- Functions --------------------------------*/

init()
function init (){
  gameBoard = [1, null, -1, null, null, null, null, null, null]
  playerTurn = 1
  isWinner = null
  gameMessage.textContent = "Player X is first, make your selection"
  render()
}

function render (){
  gameBoard.forEach((square, idx) => {
    pushLetter = document.getElementById(`sq${idx}`)
    if (square === 1) {
      pushLetter.innerHTML = 'X'
    } else if (square === -1) {
      pushLetter.innerHTML = 'O'
    } else {
      square = null
    }   
    console.log(square)
  })
}

function makeChoice (event){
  console.log(event.target.id)
}

function renderWin (){
  
}


