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

console.log(winningCombos)

/*---------------------------- Variables (state) ----------------------------*/
let gameBoard
let playerTurn
let isWinner

/*------------------------ Cached Element References ------------------------*/
const allSquares = document.querySelectorAll('.square')
const gameMessage = document.getElementById('message')
const resetBtn = document.querySelector('#reset-button')


console.log(allSquares)

/*----------------------------- Event Listeners -----------------------------*/
//listen for clicks on chosen square, add 1 (X) or -1 (O) depending on player turn
allSquares.forEach(square => 
  square.addEventListener('click', makeChoice)  
)
/*-------------------------------- Functions --------------------------------*/

init()
function init (){
  gameBoard = [sq0=null, sq1=null, sq2=null, sq3=null, sq4=null, sq5=null, sq6=null, sq7=null, sq8=null]
  playerTurn = 1
  isWinner = null
  render()
}

function render (){
  gameBoard.forEach(square => {
    if (square === 1) {
      square.innerHTML = 'X'
    } else if (square === -1) {
      square.innerHTML = 'O'
    } else {
      square = null
    }   
    console.log(square)
  })
}

function makeChoice (event){
  if (playerTurn === 1){
  event.target.innerHTML('X')
  } else {
    event.target.id.innerHTML('O')
  }
  console.log(event.target.id)
}
function renderWin (){
  
}


// let mapBoard =  gameBoard.map(functiona(a){
//   for (let i = 0; i < gameBoard.length; i++) {
//     const  = gameBoard[i]; 
    
//   }
// })
