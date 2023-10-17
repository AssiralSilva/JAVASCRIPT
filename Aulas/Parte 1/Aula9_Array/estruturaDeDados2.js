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

/*Também posso alterar um item específico de um objeto que está dentro do meu array. Exemplo: */

const users =
    [
        /*Meu array agora tem duas posições:
        Posição 1: */
        {
            nome: "Aline",
            age: 27,
        },
        /*Posição 2: */
        {
            nome: "Rodolfo",
            age: 30,
        }
    ]

console.log(users)

/*Alterando item específico de um objeto que está dentro do meu array: */

console.log(users[1].age)