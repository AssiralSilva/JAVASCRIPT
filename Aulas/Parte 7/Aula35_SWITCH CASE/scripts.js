/*
    Switch Case - Controlador de Fluxo
*/

// Estrutura do switch:

// switch (key) {
//     case value:
//         break;

//     case value:
//         break;

//     case value:
//         break;

//     default:
//         break;
// }


const temperature = 30

switch (temperature) {
    case 10:
        console.log("Está Friozinho")
        break;

    case 20:
        console.log("Está um clima ameno")
        break;

    case 30:
        console.log("Está começando a esquentar")
        break;

    default:
        break;
}

// Brincando um pouco...

const user = document.querySelector("p")

switch (user) {
    case user:
        user.innerHTML = "Larissa"
        break;

    default:
        console.log("Não recebi o dado")
        break;
}