/*

    Funções

    VOID --> Vazias
        Não nos dão retorno 

    Função Return 
        Retorna um valor para quem a chamou
 */

// VOID

function sum(value, value2) { //void
    console.log(value + value2)
}

// sum(10,20)  // ====> chamando a função e atribuido valor para as variáveis criadas
const result = sum(10,20)  // valor jogado na tela não retornado
// console.log(result  + " resultado") // pedindo pra função void me responder e posso usar o mesmo de uma variável que está dentro de uma função que não haverá conflito, pois o que acontece dentro da função fica na função.




// Função RETURN, Quando eu preciso de um retorno

function sub(value, value2){
    // Isso return value + value2 é o mesmo que:
    const result = value + value2
    return result
}

const Myresult = sub(10,20)
console.log(Myresult  + " resultado")