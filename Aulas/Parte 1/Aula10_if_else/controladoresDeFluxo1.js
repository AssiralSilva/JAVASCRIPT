/*
Controlador de Fluxo

    - IF
    - ELSE

Operadores de Comparação
    > maior que
    < menor que
    == igual que

Exemplo: (Verificando se um aluno passou ou não de ano a partir de uma
    nota base)
*/

const notaDoAluno = 3
const notaDeCorte = 5

// Estrutura do if:

if (/*condição*/notaDoAluno > notaDeCorte) {
    // Aqui estará o que será EXECUTADO se o if for VERDADEIRO
    console.log("Parabéns, Você passou de ano")
} else {
    // Seo IF for falso, ele entra aqui
    console.log("Você foi reprovado")
}
