let numeros = document.querySelectorAll(".numbers-values")
let visorResult = document.querySelector(".visor-box")


numeros.forEach(element => {
    
    do {
        function numero() {
            if(element.innerText == 1) {
                visorResult.value = element.innerText;
            }
        }
        
        element.addEventListener("click", numero)
        
        break
    } while (element.innerText < 10);
});

// visorResult.value = element.innerText;  ==>Aparece valor dos valores do array 