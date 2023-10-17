/*

    document -> HTML
    *O termo document serve para acessar o html*

    getElementById -> Trás Um elemeto pelo ID
    getElementByClassName -> Trás Todos elemntos com essa Classe
    getElementByTagName -> Trás Todos os elementos com essa TAG
    getElementByName -> Trás Todos os elementos com esse Name

    querySelector -> Trás Um elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Trás Todos os elementos que encontrar
    Vai trazer a família inteira
 */

// Alterando elementos na prática(Usando os itens acima)1

   
const query = document.querySelector("#main-input") // Acessando o item
// Navegando até o item que irei mudar:
query.placeholder = "Agora é esse texto" // or query.value = 24654897 (<=vá e teste)


console.log(query.placeholder)


    