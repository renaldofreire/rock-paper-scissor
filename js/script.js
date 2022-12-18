const options = ['rock', 'paper', 'scissors']

let randomChoice
let playerSelection
let computerSelection
let computerScore = 0
let playerScore = 0

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
    playerScore++
    let txt = 'VENCEU! Player escolhe rock. IA escolhe scissors.'
    return txt
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    let txt = 'PERDEU! Vc escolheu rock, a IA escolheu paper!'
    computerScore++
    return txt
  } else if (playerSelection !== 'rock') {
    let txt = 'Player: insira um valor válido "rock"'
    return txt
  }
}

// console.log(playRound(playerSelection, computerSelection))

function game() {
  do {
    playRound(playerSelection, computerSelection)
    console.log(`AI tem ${computerScore}`)
    console.log(`Player tem ${playerScore}\n`)
  } while (playerScore <= 4 && computerScore <= 4)
  {
    if (playerScore === 5) {
      let txt = `Usuário venceu, por ${playerScore} pontos. AI fez ${computerScore} pontos.`
      return console.log(txt)
    } else {
      let txt = `AI venceu, por ${computerScore} pontos. Usuário fez ${playerScore} pontos.`
      return console.log(txt)
    }
  }
}

game()
