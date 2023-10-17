/*
    Operadores Type of e Delete

    typeof -> Tipo do dado
    Delete
*/

const myObject = {
    name: "Larissa",
    age: 24,
    address: "Rua dos Bobos, n° 0"
}

delete myObject.address

console.log(myObject)

console.log( typeof myObject)

const myNumber = 30

console.log( typeof myNumber)