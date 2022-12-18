const options = ['rock', 'paper', 'scissors']

let randomChoice
let playerSelection
let computerSelection
let computerScore
let playerScore 

function getComputerChoice() {
  randomChoice = options[Math.floor(Math.random() * 3)]
  return randomChoice
}

function playRound(playerSelection, computerSelection) {
  playerSelection = 'rOcK'.toLowerCase()
  computerSelection = getComputerChoice().toLowerCase()

  if (playerSelection === computerSelection) {
    let txt = `Os dois valores são os mesmos: ${playerSelection}`
    return txt
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    let txt = 'VENCEU! Player escolhe rock. IA escolhe scissors.'
    return txt
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    let txt = 'PERDEU! Vc escolheu rock, a IA escolheu paper!'
    return txt
  } else if (playerSelection !== 'rock') {
    let txt = 'Insira um valor válido.'
    return txt
  }
}

console.log(playRound(playerSelection, computerSelection))

// console.log(playRound(playerSelection, computerSelection))

// function game() {
//   for (i = 0; i < 5; i++) {
//     playRound(playerSelection, computerSelection)
//   }
// }
