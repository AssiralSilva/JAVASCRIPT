/*

    Calcula Desconto:

    Todos os produtos acima de R$ 30,00 tem desconto de 10%
*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0
let valueWithoutDescount = 0
function CalculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

for (let temporario of cart) {
    if(temporario > 30){
        const valorComDesconto = CalculateDiscount(temporario, 10)
        finalValue = finalValue + (temporario - valorComDesconto)
    }else {
        finalValue += temporario
    }
}

for (const temporario of cart) {
    valueWithoutDescount += temporario
}

let descount =  valueWithoutDescount - finalValue

// Desafio pegar o valor sem desconto e mostrar para o usuário

// Ajustar valores com duas casa após a vírgula
console.log(`O valor final da sua compra foi de R$ ${valueWithoutDescount.toFixed(2)}, mas você teve desconto nos produtos acima de R$ 30,00 reais e vai pagar R$ ${finalValue.toFixed(2)}, você economizou R$ ${descount.toFixed(2)} reais`)
