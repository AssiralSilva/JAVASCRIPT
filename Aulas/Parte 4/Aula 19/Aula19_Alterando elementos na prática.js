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

// Alterando elementos na prática(Usando os itens acima)2

   
const img = document.querySelector("img") // Acessando o item
// Mudando uma imagem:
// img.src="./foto2.jpg" --> eu posso mudar a imagem por aqui
console.log(img.src)
    
    
        