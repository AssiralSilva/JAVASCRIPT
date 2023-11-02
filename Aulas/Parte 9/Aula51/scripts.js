/*
    Reduce(Reduz o tamanho do array)

    - Retorna um valor (pode ser um novo array, um novo objeto, string, number, etc.)
    - Aceita 4 parâmetros 
        - acumulador
        - valor atual
        - index
        - array completo
*/
const list = [1, 2, 3, 4, 5, 6, 7]

// Exemplo reduce, quero saber qual o valor todas de todos os valores do array, a soma desses valores.

const sum = list.reduce((acumulador, valorAtual) => {
    console.log(`${acumulador}  acc`)
    console.log(`${valorAtual}  valor atual`)
    return acumulador + valorAtual
    // Tudo o que ele retornar ele irá guardar no aculmulador
}, 0)

// console.log(sum)

// Modelo da estrutura com reduce com função anônima e não arrow function

/*

const sum = list.reduce(function (acumulador, valorAtual) {

}, valorInicial)
Funcionaria da mesma forma
*/



// Exemplo de caso quase real na aula:
// Somar o valor de mercado de grandes empresas mundiais

const companies = 
[
    {
        name: 'Samsung', 
        marketValue: 50, 
        CEO: 'Kim Hyun Suk', 
        foundedOn:1938,  
    },

    {
        name: 'Microsoft', 
        marketValue: 415, 
        CEO: 'Satya Nadella', 
        foundedOn: 1975  
    },

    {
        name: 'Intel', 
        marketValue: 117, 
        CEO: 'Brian Krzanich', 
        foundedOn: 1968,  
    },

    {
        name: 'Facebook', 
        marketValue: 383, 
        CEO: 'Mark Zuckerberg', 
        foundedOn: 2004,  
    },

    {
        name: 'Spotify', 
        marketValue: 30, 
        CEO: 'Daniel Ek', 
        foundedOn: 2006, 
    },

    {
        name: 'Apple', 
        marketValue: 845, 
        CEO: 'Tom Cook', 
        foundedOn: 1976,
    },
]

const sum2 = companies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(`Renda gerada pelas grandes empresas mundiais: R$ ${sum2},00`)