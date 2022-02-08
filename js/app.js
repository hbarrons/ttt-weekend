/*-------------------------------- Constants --------------------------------*/

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
const blankBoard = function(){
  for (let i=0; i<gameBoard.length; i++){
    pushLetter = document.getElementById(`sq${i}`)
    pushLetter.innerHTML = ''
    allSquares[i].style.backgroundColor = 'darkslateblue'
    allSquares.innerHTML = ""
  } 
}

/*-------------------------------- Constants --------------------------------*/
let gameBoard
let playerTurn
let isWinner

/*------------------------ Cached Element References ------------------------*/
const allSquares = Array.from(document.querySelectorAll('.square'))
const gameMessage = document.getElementById('message')
const resetBtn = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/
allSquares.forEach(square => 
  square.addEventListener('click', handleClick))
resetBtn.addEventListener('click', init)
resetBtn.addEventListener('click', blankBoard)

/*-------------------------------- Functions --------------------------------*/
init()
function init (){
  gameBoard = [null, null, null, null, null, null, null, null, null]
  playerTurn = 1
  isWinner = null
  gameMessage.textContent = "X is up first. Make your selection!"
  resetBtn.setAttribute("hidden", true)
  render()
}

function render (){
  gameBoard.forEach((square, idx) => {
    pushLetter = document.getElementById(`sq${idx}`)
    if (square === 1  && square !== null) {
      pushLetter.innerHTML = 'X'
      allSquares[idx].style.backgroundColor = 'lightblue'
    } else if (square === -1 && square !== null) {
      pushLetter.innerHTML = 'O'
      allSquares[idx].style.backgroundColor = 'pink'
    } else {
      square = null
    }   
  })
}

function renderWinner (){
   winningCombos.forEach(winCombo => {
     let total = 0
     winCombo.forEach(idx => {
       total = total + gameBoard[idx]
      })
      if (Math.abs(total) === 3) {
        isWinner = playerTurn
        winCombo.forEach(idx => {
          allSquares[idx].style.backgroundColor = '#FDFD96'
        })
     } 
   })
   if (isWinner === -1) {
    gameMessage.textContent = 'X wins! Reset to play again.'
  } else if (isWinner === 1){
    gameMessage.textContent = 'O wins! Reset to play again.'
  } else if (isWinner === null && gameBoard.every(square => square !== null)){
    isWinner = "T"
    gameMessage.textContent = "Cat's game - reset to play again!"
  }
}

function renderTurn(){
  if ((gameBoard.reduce(function(prev, current) {
    return prev += current})) === 1) {
      playerTurn *= -1
      gameMessage.textContent = "O's turn!"
    }
  if ((gameBoard.reduce(function(prev, current) {
    return prev += current})) === 0 ) {
      gameMessage.textContent = "X's turn!"
      playerTurn *= -1
    }
}
//my function
// function handleClick (event){
//   let squareClick = parseInt(event.target.id.split('').pop())
//   if(gameBoard[squareClick] === null && gameBoard[squareClick] !== 1 && gameBoard[squareClick] !== -1) {
//     gameBoard[squareClick] = playerTurn;
//   }
//   render()
//   renderTurn()
//   renderWinner() 
//   clearGame()
// }

// Joe's function
function handleClick(event) {
  let squareClick = parseInt(event.target.id.split('').pop())
  // if (gameBoard[squareClick] === null && gameBoard[squareClick] !== 1 && gameBoard[squareClick] !== -1) {
  if (gameBoard[squareClick] === null && isWinner === null) { // <= prevent the 'move' if a winner has been declared
    // return gameBoard[squareClick] = playerTurn;
    gameBoard[squareClick] = playerTurn;
    render()
    renderTurn()
    renderWinner()
    clearGame()
    // ^^moved into if block
  }
}

function clearGame (){
  if (isWinner === 1 || isWinner === -1 || isWinner === 'T') {
  resetBtn.removeAttribute("hidden")
  for (let i=0; i<gameBoard.length; i++){
    gameBoard[i] = null
    }
  }
}