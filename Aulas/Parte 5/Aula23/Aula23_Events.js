/*
    Eventos
*/
//Clicando no botão e ele mostrando um alerta na tela
function cliqueiNoBotao() {
    alert('Botão Clicado com sucesso')
}
// Digitando no Input e ele mostrando uma mensagem no console
//Quanto mais letras clicadas mais "Digitei no input será contabilizado"
function digiteiNoInput() {
    console.log("Digitei no input")
}
// Declarei uma variável para acessar o segundo input e quando digitar no
// input todas serão mostradas no console.
const input = document.querySelector("#main-input2")

function digiteiNoInput2() {
    console.log(input.value)
}
//Declarando uma variável para acessar o input e ele ter um evento pelo botão
const input3 = document.querySelector("#main-input")
// Ao clicar no botão no console aparece o valor do segundo input
function cliqueiNoBotao2() {
    console.log(input.value)
}



