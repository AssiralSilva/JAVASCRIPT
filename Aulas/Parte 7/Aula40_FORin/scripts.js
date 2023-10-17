/*
    Estrutura de Repetição - LOOP

    -- FOR IN

    
    Estrutura de código:

    for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

const users = {name: "Rodolfo", age:33, adress:"Rua dos bobs n° 0"}

for (const key in users) {
    // console.log(key)
    // console.log(key + " : " + users[key])
    console.log(`${key} : ${users[key]}`) // Forma mais profissional 
}