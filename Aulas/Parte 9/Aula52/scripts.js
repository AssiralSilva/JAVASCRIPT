/*
            FILTER
        
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, APENAS com os elementos filtrados
    - Aceita 3 parâmetros

        - item do array
        - index (índice)
        - array completo

        return true  --> Item atual passa pro novo array
        return false --> Item atual  NÃO passa pro novo array
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter((number) => 
{
    if(number > 100) 
    {
        return true
    }
    else
    {
        return false
    }

})

console.log(newList)


// ESCRITA COM FRUFRU(ABREVIAÇÕES)

/*
const newList = list.filter(number => number > 100 ? true : false)

console.log(newList)
*/

// ESCRITA AINDA MAIS ABREVIADA, O IDEAL*****

/*
const newList = list.filter(number => number > 100)
// Nesse caso ele já automáticamente já entende que se number for maior que 100 eu uso aquele number.
// Simplicidade é tudo
console.log(newList)
*/




// Exemplo2

// const newList = list.filter((number) => 
// {
//     if(number < 100 && number % 2 === 0) 
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }

// })

// console.log(newList)









// Exemplo 3

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

const newCompanies = companies.filter(company => {
    if(company.marketValue < 200 && company.foundedOn > 1990)  return true
    else return false
})

console.log(newCompanies)



