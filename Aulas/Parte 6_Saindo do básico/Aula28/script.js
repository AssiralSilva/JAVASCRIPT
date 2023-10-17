/*

    Operadores aritméticos

    ==> + Adição
    ==> - Subtração
    ==> * Multiplicação
    ==> / Divisão
    ==> % Resto

    ==> ++ Incremento
    ==> -- Decremento
    ==> ** Exponencial

*/

const result = 2 + 3

console.log(result)



const result2 = 2 - 3

console.log(result2)



const result3 = 6 / 3

console.log(result3)



const result4 = 6 * 3

console.log(result4)



const result5 = 6 % 3

console.log(result5)



let result6 = 20 // Relembrando: Como o valor terá uma nova atribuição, é preciso trocar a variável para let.

result6++

console.log(result6) // resultado 21


let result6_1 = 20

result6_1++ // 1 a mais
result6_1++ // 1 a mais ao anterior

console.log(result6_1)
//  console.log(result6_1++) 
//  console.log(result6_1) 
// --> Faz pegar apenas o valor da variável e depois é preciso pedir pra mostrá-la com outro console.log


//  console.log(++result6_1) --> Ou é possível colocar o incremento da forma descrita nesta linha<--<inicio>


// O decremento funciona da mesma forma
let result7 = 20

console.log(--result7) // aparecerá 19

const result8 = 6 ** 3

console.log(result8)