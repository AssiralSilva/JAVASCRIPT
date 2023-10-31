/*      Desafio 1 - Map

    Verificar se a pulseira dos convidados são vips ou não. Os vips tem pulseira black
*/
const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Júlio', vip: false},
]

const newList = list.map((item) => {
    if(item.vip == true){
        item.vip = 'Black'
    }
    if(item.vip == false){
        item.vip = 'Green'
    }

    return item
})

console.log(newList)

/*
    Desafio com o professor: (Código do professor)
    const newList = list.map( user => {
        const newUser = {
            name: user.name,
            braceletColor: user.vip ? 'black' : 'green'
        }

        return newUser
    })

    console.log(newList)
    Ele criou um novo objeto para guardar mais específico o itens dentro do mapeamento. É interessante que nesse caso o map se parece bastante com o for of
*/