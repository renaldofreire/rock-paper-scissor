const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let randomChoice = options[Math.floor(Math.random() * 3)]
  return randomChoice
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return console.log(`Os dois valores são iguais: ${playerSelection}`)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerSelection++
    return console.log('VENCEU! Player escolhe rock. IA escolhe scissors.')
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerSelection++
    return console.log('PERDEU! Vc escolheu rock, a IA escolheu paper!')
  } else if (playerSelection !== 'rock') {
    return console.log('Insira um valor válido.')
  }
}

const playerSelection = 'rOcK'.toLowerCase()
const computerSelection = getComputerChoice()
// console.log(computerSelection)

// function game(){
//   for 
// }
