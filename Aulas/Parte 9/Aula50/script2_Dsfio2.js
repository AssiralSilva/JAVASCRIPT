/*      Desafio 2 - Map

    Verificar se os alunos foram aprovados ou não. Os vips tem pulseira black
*/
const list = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Júlio', testGrade: 10},
]

const newList = list.map((item) => {
    const newStudents = {
        name: item.name,
        testGrade: item.testGrade,
        resultTests: item.testGrade > 7 ? 'Aprovado' : item.testGrade >= 5 && item.testGrade <= 7 ? 'Recuperação' : 'Reprovado'
    }

    return newStudents
})

console.log(newList)