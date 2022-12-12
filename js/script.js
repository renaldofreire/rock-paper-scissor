function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors']

  let randomChoice = options[Math.floor(Math.random() * 3)]
  return console.log(randomChoice)
}

getComputerChoice()
