/*
    Eventos - Lição de casa
*/
const input = document.querySelector("#main-input")

const paragraph = document.querySelector("#p-test")
/* 
    O parágrafo recebeu o valor do input e com o innerHTML foi
    permitido aparecer na tela
 */
function cliqueiNoBotao() {
    paragraph.innerHTML = input.value
}




