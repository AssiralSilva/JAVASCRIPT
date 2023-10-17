/*
    IF (SE)
    ELSE (SENÃO)

    ELSE IF
*/

const temperature = 30

// if(temperature === 36) {
//     console.log("Você está saudável")
// }else {
//     console.log("Você está doente")
// }

if(temperature === 36) {
    console.log("Você está saudável")
} else if(temperature > 36 && temperature <= 40){
    console.log("Você está com febre")
}else if (temperature > 40){
    console.log("Está com MUITA febre")
} else {
    console.log("Você está com hiportermia.")
}