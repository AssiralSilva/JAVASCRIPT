function generateNumber() {
    const min = Math.ceil(document.querySelector(".input1").value)
    const max = Math.floor(document.querySelector(".input2").value)

    if (max <= min) {
        alert("Por favor, digitar o primeiro valor menor que o segundo e sempre valores diferentes!!!")
    }
    else {
        const result = document.querySelector(".number-drawn")

        if (min == "" || max == "" || min == "" && max == "") {
            alert("Por favor preencher todos os valores")
        } else {
            result.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}