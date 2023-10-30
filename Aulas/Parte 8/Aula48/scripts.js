const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => {
    pontuaçao()
})

scissors.addEventListener("click", () => {
    pontuaçao()
})

function pontuaçao(min = 1, max = 4) {
    machineChoice = Math.floor(Math.random() * (max - min) + min)
   
    if(machineChoice == 1)  {
        const result = document.querySelector(".result")
        result.innerHTML = "Empate";
    }

    if(machineChoice == 2) {
        const result = document.querySelector(".result")
        result.innerHTML = "Você Perdeu";
    }

    if(machineChoice == 3) {
        const result = document.querySelector(".result")
        result.innerHTML = "Você Venceu";
    }
}

paper.addEventListener("click", (min = 1, max = 2) => {
    pontuaçao()
    
    function pontuaçao(min = 1, max = 4) {
        machineChoice = Math.floor(Math.random() * (max - min) + min)
       
        if(machineChoice == 1)  {
            const result = document.querySelector(".result")
            result.innerHTML = "Empate";
        }

        if(machineChoice == 2) {
            const result = document.querySelector(".result")
            result.innerHTML = "Você Venceu";
        }

        if(machineChoice == 3) {
            const result = document.querySelector(".result")
            result.innerHTML = "Você Perdeu";
        }
    }
})





