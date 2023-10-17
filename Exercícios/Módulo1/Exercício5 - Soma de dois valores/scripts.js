function soma() {
    let n1 = Number(document.querySelector(".input1").value)
    // n1 = parseInt(n1);

    // O Number() e o parseInt() fazem a mesma coisa, eles forçam o valores dos inputs type=number a serem vistos como número e não como texto.
    let n2 = Number(document.querySelector(".input2").value)
    // n2 = parseInt(n2);
    let result = document.querySelector("p")
    
    result.innerHTML = `A soma de ${n1} e ${n2} é ${n1 + n2}`;
}

/*
Se os input eram string porque apenas não somava, mas calculava as outras operações?
Isso ocorre provavelmente porque as vezes o + é visto pelo javascript como concatenação e vendo os inputs como strings.
*/