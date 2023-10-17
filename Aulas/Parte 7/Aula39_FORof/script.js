/*
    Estrutura de Repetição - LOOP(Laço)

    - FOR OF


    Estrutura no código: 

    for (const iterator of object) {
    
    }

    Obs.: No For of não é possível mexer em objetos.
*/

const myName = 'Rodolfo'
const users = ['João', 'Maria', 'Letícia']

for (const letter of myName) {
    console.log(letter)
}

for (const letter of users) {
    console.log(letter)
}

for (const name of users) {
    console.log(name)
}
