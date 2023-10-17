/*
    ForEach (item, index, array)

    O foreach também itera os itens do meu array, assim como o for of

    Estrutura de código:
    array.forEach(element => {
    
    });










    Observações: 
    -- Element é uma variável então podemos mudar o nome sim.
    -- Em mais de um valor é necessário no 'element' colocar parênteses para indicar que são variáveis diferentes
    -- O item(element) é o item específico que estou iterando no momento
    Exemplo:

    const users = [
    {name: 'Rodolfo', age: 33, contacts:'(19) 94343-3434'},
    {name: 'Paulo', age: 21, contacts:'(12) 93434-3434'},
    {name: 'Aline', age: 40, contacts:'(13) 94566-3434'},
    {name: 'Maria', age: 12, contacts:'(14) 94343-3476'},
    ]

    // users.forEach(function (item) => {
    //     console.log(item)
    // });






    -- O index é a posição do array em que estou. 

        users.forEach(function (item, index) => {
            console.log(item)
            console.log(index)
        });

        // ((item, index) ====> Isso é uma arrow function --> !abreviação de uma função! Por isso é possível escrevÊ-la assim como no exemplo acima


        users.forEach(function (item, index, array) => {
          console.log(item)
          console.log(index)
          console.log(array)
        });
*/

const users = [
    {name: 'Rodolfo', age: 33, contacts:'(19) 94343-3434'},
    {name: 'Paulo', age: 21, contacts:'(12) 93434-3434'},
    {name: 'Aline', age: 40, contacts:'(13) 94566-3434'},
    {name: 'Maria', age: 12, contacts:'(14) 94343-3476'},
]


//Exemplos de forma dele ficar no código:


users.forEach((item, abacate) => {
    console.log(item)
});

users.forEach((item, abacate) => {
    console.log(abacate)
});

users.forEach((item, abacate) => {
    console.log(abacate + ")" + item)
});

users.forEach((item, abacate) => {
    console.log(abacate)
    console.log(item)
});

users.forEach((item, i) => {
    console.log(i)
    console.log(item)
});

users.forEach((item, abacate, array) => {
    console.log(abacate)
    console.log(item)
    console.log(array)
});

users.forEach(item => {
    console.log(item.name)
});

users.forEach((item, index) => {
    console.log(`${index + 1}) Nome ${item.name} Age ${item.age} Contato ${item.contacts}`) // mais profissional
})