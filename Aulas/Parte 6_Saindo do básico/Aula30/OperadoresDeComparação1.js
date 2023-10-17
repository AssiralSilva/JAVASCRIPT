/*
    Operadores de comparação

    ==  --> Igual // Compara o valor, mas não o tipo. // Tia Clotilde
    ==  --> Totalmente Igual // Compara o valor e o tipo. // Tia Gertrudes


    !=  --> Diferente // Ele compara o valor, mas não o tipo.
    !== --> Totalmente Diferente // Compara o valor e o tipo.
*/

// Comparação apenas de valor e não de tipo:

const firtNumber = 30
const secondNumber = 40

console.log(firtNumber == secondNumber)

// if (firtNumber == secondNumber) {
//     console.log("Eles são iguais")
// }else{
//     console.log("Eles não são iguais")
// }




// Comparação de valor e tipo:
// O valor é literalmente o valor do item e o tipo é o tipo de variável, exemplo texto e número.
//Nesse caso, o 30 número é igual ao valor do texto 30, mas não é igual do tipo 30, porque na variável a o tipo é número e na variável b o tipo é texto.
const a = 30
const b = "30"

console.log(a == b)
console.log(a === b)

console.log(a != b) // virá um false
console.log(a !== b) // true

// Comparação de valor e tipo:
// O valor é literalmente o valor do item e o tipo é o tipo de variável, exemplo texto e número.
//Nesse caso, o 30 número é igual ao valor do texto 30, mas não é igual do tipo 30, porque na variável a o tipo é número e na variável b o tipo é texto.
const c = 30
const d = "30"

console.log(c != d) // virá um false
console.log(c !== d) // true