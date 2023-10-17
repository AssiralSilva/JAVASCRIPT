/*
    Eventos

*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")
// function () ==> função anônima, porque não recebe nome
select.addEventListener("change", function(){
    console.log("Troquei de Valor")
})
