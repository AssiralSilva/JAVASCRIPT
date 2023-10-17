/*
    while & Do While

    while ------> Verifique se é True e faça
    do while ---> Faça, depois veja se é true

    while (condition) {
    
    }
*/

// while (true) {
//     // console.log("É true")
// }

let i = 0

console.log("Um código aqui")

while (i < 30) {
    i++;
    console.log(i)
}

console.log("Esse código-Depois do while só executa quando sair do while")











let n = 0

// DO WHILE:
//Primeiro ele faz depois ele verifica se é verdadeiro ou não.
do {
    n++;
    console.log(n)
    break // para o laço
} while (n < 10);