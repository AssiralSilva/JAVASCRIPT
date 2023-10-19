let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
let n3 = document.querySelector(".n3")
let n4 = document.querySelector(".n4")
let n5 = document.querySelector(".n5")
let n6 = document.querySelector(".n6")
let n7 = document.querySelector(".n7")
let n8 = document.querySelector(".n8")
let n9 = document.querySelector(".n9")
let nzero = document.querySelector("#zero")
let visorResult = document.querySelector(".visor-box")
let visorValue = "";

let buttonReset = document.querySelector(".reset-button")

function adicionarNumero(numero) {
    visorValue += numero;
    visorResult.value = visorValue;
}

n1.addEventListener("click", () => {
    adicionarNumero(1)
})

n2.addEventListener("click", () => {
    adicionarNumero(2)
})

n3.addEventListener("click", () => {
    adicionarNumero(3)
})

n4.addEventListener("click", () => {
    adicionarNumero(4)
})

n5.addEventListener("click", () => {
    adicionarNumero(5)
})

n6.addEventListener("click", () => {
    adicionarNumero(6)
})

n7.addEventListener("click", () => {
    adicionarNumero(7)
})

n8.addEventListener("click", () => {
    adicionarNumero(8)
})

n9.addEventListener("click", () => {
    adicionarNumero(9)
})


nzero.addEventListener("click", () => {
    adicionarNumero(0)
})


// buttonReset.addEventListener("click", () => {
//     visorResult.value = "";
// })