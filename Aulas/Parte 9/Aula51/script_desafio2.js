/*
    - Multiplicar valor de preço por kilo pelo valor do kilo de cada produto respectivamente.
    - Somar o valor total da compra
*/
const cart = 
[
    { productName:'Abóbora', pricePerKg: 5, Kg: 1, },
    { productName:'Pepino', pricePerKg: 3.55, Kg: 1.3, },
    { productName:'Limão', pricePerKg: 1.2, Kg: 2, },
    { productName:'Abacate', pricePerKg: 5.4, Kg: 1.67, },
    { productName:'Morango', pricePerKg: 11.9, Kg: 3, },
]

const sumTotal = cart.reduce((acc, valorAtual) => {
    const kgValue = valorAtual.pricePerKg * valorAtual.Kg
    return acc + kgValue
}, 0)

console.log(`Valor total da compra: ${sumTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)

// .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})   ******** TRANSFORMA VALORES EM FORMATO DE MOEDA