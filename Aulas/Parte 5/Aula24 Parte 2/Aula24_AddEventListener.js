/*
    Eventos

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiDeValor(abacate) {
    console.log(abacate)
}
/* Quando o evento trocar ou chage a função troqueiDeValor será chamada e 
como ela tem uma condição a mesma condição será mostrada com o console.log*/
select.addEventListener("change", troqueiDeValor)

function troqueiValor(event) {
    console.log(event)
}
/* Quando o evento trocar ou chage a função troqueiDeValor será chamada e 
como ela tem uma condição a mesma condição será mostrada com o console.log*/
input.addEventListener("keypress", troqueiValor)


function troqueiValores(eventos) {
    console.log(eventos)
}
/* Quando o evento trocar ou chage a função troqueiDeValor será chamada e 
como ela tem uma condição a mesma condição será mostrada com o console.log*/
button.addEventListener("click", troqueiValores)



const button2 = document.querySelector(".button2") 

button2.addEventListener("click", function(even) {
    console.log(even)
})