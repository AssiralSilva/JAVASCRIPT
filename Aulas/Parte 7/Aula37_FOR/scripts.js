/*
    Estruturas de repetição - LOOP

    - FOR
        1) Inicialização - Criar uma variável e colocar um valor inicial pra ela. 

        2) CONDIÇÃO - Enquanto for true, o laço continuará iterando
    Ele irá verificar antes de cada interação
     
    3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta

    for ([inicicialização]; [condiçao]; [expressao final]){
        Seu código aqui
    }

    Obs.: ************8   O i é a variável padrão da inicialização ******
    Diferente do setInterval, o for acontece de forma automática e não a cada tempo.(segundos)
*/
// Exemplo 1
// for (let i= 0; i < 15; i++) {
//     console.log(i)
// }

// Exemplo 2

// for (let i= 20; i > 2; i--) {
//     console.log(i)
// }




// Exemplo de uso do for real

const user = ["Maria", "João", "Cláudia", "Duda", "Chris", "Jennifer", "Joana", "Cláudia", "Duda", "Chris", "Jennifer", "Joana", "Cláudia", "Duda", "Chris", "Jennifer", "Joana", "Cláudia", "Duda", "Chris", "Jennifer", "Joana", "Jennifer", "Joana", "Cláudia", "Duda", "Chris", "Jennifer", "Joana", "Cláudia"]

// console.log(user[0])
// console.log(user[1])
// console.log(user[2])
// console.log(user[3])

// user.length => Tamanho do array

for (let i = 0; i < user.length; i++) {
    console.log(user[i])
}

