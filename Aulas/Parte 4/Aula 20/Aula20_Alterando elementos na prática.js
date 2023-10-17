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
// Aula complementar das aulas 18 e 19
   
    const element = document.querySelector("#main-input") // Acessando o item

   /*(MUDANDO O CONTEÚDO DE UM ITEM ESPECÍFICO, NESSE CASO O PLACEHOLDER)*/
   // element.placeholder = "O texto mudou"

   /*(MUDANDO O value DE UM ITEM ESPECÍFICO, NESSE CASO O PLACEHOLDER o qual já nascerá com o valor pré-estabelecido pelo desenvolvedor)*/
   element.value = 23456
   
   /*--MOSTRANDO O ITEM ESPECÍFICO, NESSE CASO O PLACEHOLDER---*/
   console.log(element.placeholder) 
   console.log(element.value)

   // Acessando o src de uma imagem e manipulando ela:

   const banana = document.querySelector("img")

   // Mudando a foto:
   banana.src = "./Foto 2.jpg"

   console.log(banana.src)

   /*

      Conclusão dessa aula:

      Podemos acessar e alterar os elementos e os itens dentro deles.
   
   */