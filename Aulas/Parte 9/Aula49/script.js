/*
    MAP, REDUCE E FILTER --> Ferramentas recentes do JavaScript        
    MAP PT.1

    MAP => Mapear o nosso array
        - Cria um novo array, a partir do array percorrido(array original)
        - Cria um novo array, com a mesma quantidade de itens do array original
        - Aceita 3 parâmetros.
            --> Item do array
            --> index
            -->  array completo(original)      
*/

const number = [1, 2, 3, 4, 5, 6, 7]

// Exemplo1: Multiplicando os valores do array original por 2 e guarde os resultados em um novo array
// modelo de escrita do código ===> const double = number.map((item) => item * 2)  (arrow function)

// Obs.: O nome dos parâmetros são irrelevantes em questão funcional

const double = number.map((item) => {
    return item * 2
})

/*
Observações adicionais:
    Não é precisamos usar todos os parâmetros(item, index, arrayoriginal)
    O valor usado só vale o que estiver sendo retornado return
    Podemos adicionar várias informações dentro dos bigodinhos
        Exemplo: 
            const double = number.map((item) => 
            {
                const newItem = item * 2
                return newItem
            })
*/

console.log(number)
console.log(double)


// Map com todos os parâmetros para entendimento
// **Ative aqui para teste
// const double2 = number.map((item, index, arrayoriginal) => {
//     console.log(item + " --> item")
//     console.log(index + " --> index")
//     console.log(arrayoriginal + " arrayoriginal")
//     const newItem = item * 2
//     return newItem
//     })

// console.log(double2)