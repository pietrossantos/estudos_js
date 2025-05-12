const energia = 70;
const clima = "sol";
const exp = 17;
const ataque = 120;
const defesa = 100;
const vida = 140;

// CONDIÇÃO SIMPLES

if(clima == "sol")
    console.log("vamos a praia!");

// CONDIÇÃO COM ELSE

if (clima == "chuva"){
console.log("vamos ao cinema!")
}else{
console.log("vamos a praia!")
}

// CONDIÇÃO COM ELSE IF

if (exp >= 18) {
    console.log("evento 3 disponivel")
} else if(exp >= 15) {
    console.log("evento 2 disponivel")
} else{
    console.log("modo normal disponivel")
}

// CONDIÇÃO DE ALINHAMENTO DOS IFS (UM IF DENTRO DE OUTRO)

if (energia >= 70 && ataque >=100 && vida >=80){
console.log("você venceu o BOSS 3!!! ")
if(exp >= 17){
    console.log("você ganhou um bônus!!!")
}} 
else {
    console.log("você perdeu!!!")
}

// PODEMOS USAR OPERADORES LÓGICOS E OPERADORES RELACIONAIS PARA FAZER AS CONDIÇÕES, PODE-SE FAZER CONTAS ARITMÉTICAS
