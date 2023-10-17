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
    for(let i = 0; i < contacts.length; i++) {
        if(input.value.toLowerCase() == contacts[i].name.toLowerCase()){
            /*Com crase(Template String) */ p.innerHTML = `Contato encontrado: ${contacts[i].name} Tel: ${contacts[i].number}`
            // Uso das aspas duplas - p.innerHTML = "Contato encontrado:" + contacts[i].name + "Tel: " + contacts[i].number

            break
        }
        else {
            p.innerHTML = `Contato não encontrado`
        }
    }
})


