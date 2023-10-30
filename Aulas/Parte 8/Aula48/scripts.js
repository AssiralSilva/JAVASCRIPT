const result = document.querySelector(".result")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const yourScore = document.querySelector(".your-score")
const machineScore = document.querySelector(".machine-score")
let machineChoice = 0

let myScoreNumber = 0
let machineScoreNumber = 0

rock.addEventListener("click", () => {
    pontuaçao()
})

scissors.addEventListener("click", () => {
    pontuaçao()
})

function pontuaçao(min = 1, max = 4) {
    machineChoice = Math.floor(Math.random() * (max - min) + min)
   
    if(machineChoice == 1)  {
        result.innerHTML = "Empate";
    }

    if(machineChoice == 2) {
        result.innerHTML = "Você Perdeu";
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }

    if(machineChoice == 3) {
        result.innerHTML = "Você Venceu";
        myScoreNumber++
        yourScore.innerHTML = myScoreNumber
    }
}

paper.addEventListener("click", (min = 1, max = 2) => {
    pontuaçao()
    
    function pontuaçao(min = 1, max = 4) {
        machineChoice = Math.floor(Math.random() * (max - min) + min)
       
        if(machineChoice == 1)  {
            result.innerHTML = "Empate";
        }

        if(machineChoice == 2) {
            result.innerHTML = "Você Venceu";
            myScoreNumber++
            yourScore.innerHTML = myScoreNumber
        }

        if(machineChoice == 3) {
            result.innerHTML = "Você Perdeu";
            machineScoreNumber++
            machineScore.innerHTML = machineScoreNumber
        }
    }
})





