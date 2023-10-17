/*
    Desafio While / Do While
*/

let input = document.querySelector(".name")
let p = document.querySelector("p")
const button = document.querySelector(".search-contact")

const contacts = [
    {name: 'Rodolfo', number:'(19) 94343-3434'},
    {name: 'Paulo', number:'(12) 93434-3434'},
    {name: 'Aline', number:'(13) 94566-3434'},
    {name: 'Maria', number:'(14) 94343-3476'},
]


// .tolowerCase() ==> Força com que as letras do elemento fiquem minúsculas
button.addEventListener("click", function() {
    
    while (input.value.toLowerCase() === contacts[0].name.toLowerCase()){
        p.innerHTML = `Contato encontrado: ${contacts[0].name} Tel: ${contacts[0].number}`
        break
    };

    while (input.value.toLowerCase() === contacts[1].name.toLowerCase()){
        p.innerHTML = `Contato encontrado: ${contacts[1].name} Tel: ${contacts[1].number}`
        break
    };

    while (input.value.toLowerCase() === contacts[2].name.toLowerCase()){
        p.innerHTML = `Contato encontrado: ${contacts[2].name} Tel: ${contacts[2].number}`
        break
    };

    while (input.value.toLowerCase() === contacts[3].name.toLowerCase()){
        p.innerHTML = `Contato encontrado: ${contacts[3].name} Tel: ${contacts[3].number}`
        break
    };

    while (input.value.toLowerCase() !== contacts[0].name.toLowerCase() && input.value.toLowerCase() !== contacts[1].name.toLowerCase() && input.value.toLowerCase() !== contacts[2].name.toLowerCase() && input.value.toLowerCase() !== contacts[3].name.toLowerCase()){
        p.innerHTML = "Contato não encontrado"
        break
    };
})


