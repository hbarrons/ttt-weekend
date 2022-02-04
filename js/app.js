/*-------------------------------- Constants --------------------------------*/
const playerX = 1
const playerO = -1

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
let playerTurn
let isWinner

/*------------------------ Cached Element References ------------------------*/
const allSquares = Array.from(document.querySelectorAll('.square'))
const gameMessage = document.getElementById('message')
const resetBtn = document.querySelector('#reset-button')



/*----------------------------- Event Listeners -----------------------------*/
//forEach that 
// allSquares.forEach(square => 
//   square.addEventListener('click', makeChoice))

// document.querySelector('.board').addEventListener('click',makeChoice)
allSquares.forEach(square => square.addEventListener('click', makeChoice))



/*-------------------------------- Functions --------------------------------*/

init()
function init (){
  gameBoard = [null, null, null, null, null, null, null, null, null]
  playerTurn = 1
  isWinner = null
  gameMessage.textContent = "Player X is first. Make your selection!"
  render()
  renderWin()
}

function render (){
  gameBoard.forEach((square, idx) => {
    pushLetter = document.getElementById(`sq${idx}`)
    if (square === 1) {
      pushLetter.innerHTML = 'X'
      gameMessage.textContent ='Player O make your selection'
      allSquares[idx].style.backgroundColor = 'lightblue'
    } else if (square === -1) {
      pushLetter.innerHTML = 'O'
      gameMessage.textContent ='Player X make your selection'
      allSquares[idx].style.backgroundColor = 'pink'
    } else {
      square = null
    }   
  })
}

function renderTurn (){
  
}


function makeChoice (event){
  console.log(event.target.id)
}

function renderWin (){
  winningCombos.forEach(winner => {
    let total = 0
    winner.forEach(idx => {
      total = total + gameBoard[idx]
    })
    if(Math.abs(total) === 3) {
      isWinner === true
    } else {
      false
    }
    console.log(isWinner)
  })
}


