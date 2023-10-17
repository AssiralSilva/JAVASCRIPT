/*
    Alterando e Acessando textos

    textContent -> Pega todo o conteúdo
    innerText -> Pega Apenas o texto
    innerHTML -> Permite adicionar HTML e texto
*/

const element = document.querySelector(".paragraph-js")

console.log(element.textContent) // Só HTML
console.log(element.innerText) // Leva em conta o CSS
console.log(element.innerHTML) // Trás TUDO e permite adicionar HTML