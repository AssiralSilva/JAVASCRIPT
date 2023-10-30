/*

        Arrow Functions
        (flecha)


        function padrão --> function() {}
        arrow function ---> () => {}

        Não escrevemos "function". 
        Além disso, usamos o sinal "=>" para criá-la, o que lembra uma flecha, fazendo jus ao nome "arrow function".
        Obs.: Essa é uma maneira reduzida de fazer uma função, sendo que programador é mão de vaca e gosta de economizar código.
*/

// function padrão:

function sayMyName(name) {
    return `Seu nome é ${name}`
}
console.log(sayMyName('Rodolfo'))
// Arrow function:
// Obs.: Normalmente ela fica dentro de uma variável, posso colocar parâmetros normalmente e além disso:
// ** Se a arrow functin tiver apenas uma única linha então não precisamos colocar um return, porque ela já terá **

const sum = (number1,number2) => number1 + number2
console.log(sum(2,3))

const sayMyName3 = name => `Seu nome é ${name}` 
console.log(sayMyName3('Larissa'))

const sayMyName2 = (name, age) => {
    `Seu nome é ${name, age}`
} // Posso ter mais de um parâmetro
console.log("Nico, Idade:", `${10} anos`)







// Função anônima: Não tem nome. Exemplos:

// array.forEach(element => {
// o que tem aqui dentro desse parênteses é uma função anônima
// });

// array.forEach(function() {
//     // essa também é uma função que não tem nome
// });

/*
o setInterval por exemplo  também tem uma fuinção anônima.
*/


