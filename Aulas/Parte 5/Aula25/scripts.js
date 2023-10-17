const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")
const convertButton = document.querySelector(".convert-button")

const currencyToConvert = document.querySelector(".logo-moeda-a-converter")
const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")
const currencyName1 = document.querySelector(".currency")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    const dolarToday = 4.97
    const euroToday = 5.27
    const libraToday = 6.06
    const bitcoinToday = 131578.9473684211


    if (currencySelect2.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(0.00)
    }

    if (currencySelect2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(0.00)
    }

    if (currencySelect2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(0.00)
    }

    if (currencySelect2.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(0.00)
    }

    if (currencySelect2.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(0.00)
    }





    if (currencySelect1.value == "real" && currencySelect2.value == "dolar") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue + dolarToday)
    }


    if (currencySelect1.value == "real" && currencySelect2.value == "euro") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if (currencySelect1.value == "real" && currencySelect2.value == "libra") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    if (currencySelect1.value == "real" && currencySelect2.value == "bitcoin") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


        currencyValueConverted.innerHTML = inputCurrencyValue / bitcoinToday
    }




    if (currencySelect1.value == "dolar" && currencySelect2.value == "real") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        const realToday = 0.2004008016032064

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }


    if (currencySelect1.value == "dolar" && currencySelect2.value == "euro") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        const euroToday = 1.057529610829104

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect1.value == "dolar" && currencySelect2.value == "libra") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        const libraToday = 1.22

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect1.value == "dolar" && currencySelect2.value == "bitcoin") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        const bitcoinToday = 26242.00

        currencyValueConverted.innerHTML = inputCurrencyValue / bitcoinToday
    }




    if (currencySelect1.value == "euro" && currencySelect2.value == "real") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        const realToday = 0.189753320683112

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }


    if (currencySelect1.value == "euro" && currencySelect2.value == "dolar") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        const dolarToday = 0.9433962264150943

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "libra") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        const libraToday = 1.149425287356322

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect1.value == "euro" && currencySelect2.value == "bitcoin") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        const bitcoinToday = 24846.65

        currencyValueConverted.innerHTML = inputCurrencyValue / bitcoinToday
    }




    if (currencySelect1.value == "libra" && currencySelect2.value == "real") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        const realToday = 0.165016501650165

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }


    if (currencySelect1.value == "libra" && currencySelect2.value == "dolar") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        const dolarToday = 0.8264462809917355

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect1.value == "libra" && currencySelect2.value == "euro") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        const euroToday = 0.8695652173913043

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect1.value == "libra" && currencySelect2.value == "bitcoin") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        const bitcoinToday = 21590.78

        currencyValueConverted.innerHTML = inputCurrencyValue / bitcoinToday
    }




    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "real") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        const realToday = 0.00000763918596834

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }


    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "dolar") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        const dolarToday = 0.0000381010439686

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "euro") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        const euroToday = 0.0000402521718059

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "libra") {

        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        const bitcoinToday = 0.0000462742945831

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / bitcoinToday)
    }

}




currencySelect1.addEventListener("change", function () {
    if (currencySelect1.value == "real") {
        currencyName1.innerHTML = "Real"
        currencyToConvert.src = "./assets/real.webp"
    }

    if (currencySelect1.value == "dolar") {
        currencyName1.innerHTML = "Dólar Americano"
        currencyToConvert.src = "./assets/dolar.jpg"
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelect1.value == "euro") {
        currencyName1.innerHTML = "Euro"
        currencyToConvert.src = "./assets/euro.jpg"
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelect1.value == "libra") {
        currencyName1.innerHTML = "Libra"
        currencyToConvert.src = "./assets/libra.png"
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect1.value == "bitcoin") {
        currencyName1.innerHTML = "Bitcoin"
        currencyToConvert.src = "./assets/bitcoin.png"
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("number", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelect1.value == currencySelect2.value) {
        alert("Por favor, escolha moedas diferentes")
    }

    convertValues()
})


currencySelect2.addEventListener("change", function () {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect2.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.webp"
    }

    if (currencySelect2.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.jpg"
    }

    if (currencySelect2.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.jpg"
    }

    if (currencySelect2.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect2.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect1.value == currencySelect2.value) {
        alert("Por favor, escolha moedas diferentes")
    }

    convertValues()
})


convertButton.addEventListener("click", convertValues)

convertButton.addEventListener("click", function() {
    if(currencySelect1.value == "" || currencySelect2.value == ""){
        alert("Uma ou mais escolhas faltando!!! Preencher ambas as opções")
    }
})