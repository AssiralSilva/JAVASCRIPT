/*
    Operador Ternário

    ? if (se)
    : else (se não)
    && (if sem else)
*/
/*
Observação: O operador ternário serve apenas para retornos pequenos e rápidos, mas já em códigos mais robustos são usado o if e o else normalmente.
 */



// Deixando o if ternário :

// Apenas o operador lógico &&
const salary2 = 2000

salary2 < 3000 && console.log("O colaborador é júnior") //*************************** */


//IF ELSE TERNÁRIO

const salary = 5000

// if (salary < 3000) {
//     console.log("O colaborador é júnior")
// } else {
//     console.log("O colaborador é sênior")
// }

// Podemos fazer a mesma verificação de forma mais sucinta:

salary < 3000 ? console.log("O colaborador é júnior") : console.log("O colaborador é sênior") //*************************** */




// Invertendo os papéis: else if TERNÁRIO

const salary3 = 10000

// if (salary3 < 3000) {
//     console.log("O colaborador é júnior")
// } else if(salary3 >= 3000 && salary3 < 10000) {
//     console.log("O colaborador é sênior")
// }else {
//     console.log("Ele é diretor")
// }

salary3 < 3000 ? console.log("O colaborador é júnior") : salary3 >= 3000 && salary3 < 10000 ? console.log("O colaborador é sênior") : console.log("Ele é diretor") //*************************** */




