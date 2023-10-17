/*
    Functions  / Funções

    Trecho de código que é executado somente quando solicitado (Parente gente boa)
    Funções podem receber argumentos ou parâmetros
*/

const variavel = "abacatinho"
console.log(variavel)

function nomeNaTela() {
    console.log("Rodolfo")
} // Não foi chamado


function sayMyName(name) {
    console.log(`O nome é ${name}`)
}

sayMyName("Rodolfo")
sayMyName("Aline")
sayMyName("Paulo")
sayMyName("Maria") // Como a função pode ser chamada varia vezes no código então todas as vezes em que é chamada mesmo que com novas atribuições de nomes elas aparecem cada uma com sua respectiva atribuição.

function banana(value, value2, value3, value4) {
    console.log(value + value2 + value3 + value4)
}

banana(20,30,0,0)
banana(21,58,0,0)
banana(20,30,84,0)

/*
Desafio:

Fazer uma calculadora
*/


// Podemos chamar uma função dentro de outra função:

// function sub(value, value2) {

// }

// function banana(value, value2) {
//     sub(value, value2)
// }



// Podemos fazer uma função chamando ela com um valor padrão e caso ela receba outro valor quando chamada então ela faz uso do valor recebido e não do padrão.

// Exemplo

function sayMyName2(name = "Rodolfo") {
    console.log(name)
}
sayMyName2() // Aqui o que valeu foi o nome pré-definido. Já que ela não recebeu novas mudanças na variável name.

function sayMyName3(name = "Rodolfo") {
    console.log(name)
}
sayMyName3("Aline")// Já aqui o que valeu foi o nome definido posteriormente. Já que ela recebeu novas mudanças na variável name depois, ao ser chamada.


function sum2(number1 = 1, number2 = 2) {
    console.log(number1 + number2)
}
sum2()

function sum2(number1 = 1, number2 = 2) {
    console.log(number1 + number2)
}
sum2(5,1) // parâmetro prioritário
