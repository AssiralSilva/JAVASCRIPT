const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoices) => {
    console.log(humanChoices)

    playTheGame(humanChoices, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}


const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Machine: ' + machine)

    if (human === machine) 
    {
        result.innerHTML = 'Empate!'
    } else if ((human === 'paper' && machine === 'rock') || (human === 'scissors' && machine === 'paper') || human === 'rock' && machine === 'scissors') 
    {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou'
    } else 
    {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu'
    }
}