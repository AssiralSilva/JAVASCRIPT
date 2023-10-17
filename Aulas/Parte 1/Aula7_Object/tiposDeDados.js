/*
Tipos de Dados

1. String -> Textos
2. Numbers -> Números
3. Boolean -> Boleano --> True or false
4. Object -> Objetos

    --> Objetos tem propriedades.
    Exemplo: A caneca, é preta, tem um desenho, tem 10cm, etc.
    Objetos no código também tem propriedades.
*/

const user = "Rodolfo"
console.log(user)
const age = 30
console.log(age)
const address = "Rua dos bobos, número Zero"
console.log(address)
/* --Se tivessemos que cadastrar mais de um usuário por exemplo. Isso
     daria muito trabalho.
     Mas criando um objeto fica mais fácil de fazer mudanças 
*/

const rodolfo = {
    /*Aqui dentro colocamos os valores/ as propriedades do objeto "rodolfo"
    Obs.:
    Objeto: Rodolfo
    Propriedade exemplo: age
    Valor da propriedade: 30*/
    
    name : "Rodolfo",
    age : 30,
    address : "Rua dos bobos, número Zero"
}

console.log(rodolfo)

console.log(rodolfo.age)

/*
    --->Podemos ter um objeto dentro de objetos.
 */

const rodolfos = {
    name : "Rodolfo",
    age : 30,
    address : {
        street : "Rua dos Bobos",
        number : 0,
        city : "São Paulo",
        state : "SP",
        country : "Brasil"
    }
}

console.log(rodolfos)

console.log(rodolfos.address)

console.log(rodolfos.address.country)

/*
    --->Podemos pegar para mostrar apenas um item de dentro do objeto, para não mostrar todos.
*/

console.log(rodolfo.name)

console.log(rodolfos.address.city)

/*
    ---> Alterando dado do objeto depois de criado:
    Navegue no objeto.
    Exemplo:
*/

rodolfos.address.number = 1;

console.log(rodolfos.address.number)
