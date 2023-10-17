/*
    Operadores lógicos

    && --> E  --> Pessoa exigente/ Pessoa Obediente

    true && true = true
    true && false = false
    false && false = false

    || --> OU --> Tanto faz / Filho espertinho

    true || true = true
    true || false = true
    false || false = false
    
    !  --> Negação    ----> Ele uma inversão

    !true = false
    !false = true


    Mariazinha é EXIGENTE. Ela Não quer o Joãozinho.
    Ela quer isso:
    // Bonito &&(E) // Inteligente &&(E) // Programador &&(E) // Tem que ter carro
    Joãozinho
    // Não é Bonito &&(E) // Inteligente &&(E) // Programador &&(E) // Tem  carro

    Luluzinha não é tão exigente(Tanto faz) Ela quer o Paulinho.
    // Bonito &&(E) // Inteligente &&(E) // Programador &&(E) // Tem que ter carro
    Paulinho:
    // Não é Bonito / Burro / Não é Programador / Tem  carro
*/

// Exigente

console.log(true && true && true)
console.log(true && false && true)
console.log(false && false && false)

// Tanto faz

console.log(true || true || true)
console.log(true || false || true) // true ===> mesmo assim, não tem problema o false.
console.log(false || false || false)

const digitarSenha = true
const digitarToken = true
const numeroDaConta = true

if(! (digitarSenha || digitarToken || numeroDaConta)) {
    console.log("Logado com sucesso")
}
else {
    console.log("Autenticação Falhou")
}