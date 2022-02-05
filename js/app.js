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
  gameBoard = [null, null, null, null, null, null, null, null, null]
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
      // gameMessage.textContent = "Player O's turn, make your selection!"
      allSquares[idx].style.backgroundColor = 'lightblue'
    } else if (square === -1) {
      pushLetter.innerHTML = 'O'
      // gameMessage.textContent = "Player X's turn, make your selection!"
      allSquares[idx].style.backgroundColor = 'pink'
    } else {
      square = null
    }   
  })
  clearGame()
}

function renderWinner (){
   winningCombos.forEach(winCombo => {
     let total = 0
     winCombo.forEach(idx => {
       total = total + gameBoard[idx]
      })
      if (Math.abs(total) === 3) {
        isWinner = playerTurn
     } 
   })
   if (isWinner === -1) {
    gameMessage.textContent = 'Player X wins!'
  } else if (isWinner === 1){
    gameMessage.textContent = 'Player O wins!'
  } else if (isWinner === null && gameBoard.every(square => square !== null)){
    isWinner = "T"
    gameMessage.textContent = 'Cats game - reset to play again!'
  }
}

function renderTurn (){
  playerTurn *= -1
  if (playerTurn === 1 && isWinner === null){
    gameMessage.textContent = "Player X's turn, make your selection!"
  } else if (playerTurn === -1 && isWinner === null){
    gameMessage.textContent = "Player O's turn, make your selection!"
  }
}


function handleClick (event){
  let squareClick = parseInt(event.target.id.split('').pop())
  if(gameBoard[squareClick] === null)
  return gameBoard[squareClick] = playerTurn;
  render()
  renderTurn()
  renderWinner() 
  clearGame()
}


function clearGame (){
  if (isWinner === 1 || isWinner === -1 || isWinner === 'T')
  resetBtn.removeAttribute("hidden")
}

//debugging
//prevent click on filled square
