/*
Tipos de Dados

1. String -> Textos
2. Numbers -> Números
3. Boolean -> Boleano
4. Object -> Objetos

    --> Objetos tem propriedades.
    Exemplo: A caneca, é preta, tem um desenho, tem 10cm, etc.
    Objetos no código também tem propriedades.
5. Null e Undefined

    --> Null: Você estabeleceu o valor como null
        Undefined: Você fez merda no código

6. Array ou Vetor ou Matriz
*/

const myArray = [20, 30, 'Olá', { nome: "Aline", idade: 30, nomeDoConjuge: "Rodolfo" }]

/*Podemos resolver um problema com o Array, nós podemos colocar por exemplo vários usuários 
no mesmo grupo sem ter que criar uma variável para cada um deles. Exemplo:*/

const users = [
    {
        nome: "Rodolfo",
        idade: 30,
        nomeDoConjuge: "Aline"
    },

    {
        nome: "Aline",
        idade: 27,
        nomeDoConjuge: "Rodolfo"
    }
]

/*Daí é só ir adicionando o usuário dentro do Array e assim tambéml será fácil de fazer pesquisas 
dentro dele*/

const user = [20, 30, 490]

console.log(user)
console.log(user[2])

/*Não posso alterar o array sozinho, mas posso escolher um item específico do array e alterá-lo 
normalmente assim como fazemos no objeto. Exemplo:*/
user[2] = 454

console.log(user[2])