let num = 0 // VALOR DA VARIAVAL

while(num<10){ // ESSE SERÁ UM LOOP INFINITO SE NÃO HOUVER O CONTROLHE(INCREMENTO, DECREMETO), PORQUE O VALOR NÃO PODE SE ALTERAR SOZINHO, DEIXANDO ASSIM, NESSE CASO, RESULTADO DE NUM = 0 < 10 = TRUE, OCASIONANDO NUM LOOP INFINITO
console.log(num)
num++
}

console.log("")
// fatorial
// 5! 5*4*3*2*1 = 120

let valor = 5
let fat = 1

while(valor>=1){
    fat*=valor // VALOR VEZES O VALOR DE VALOR, A CADA VEZ QUE O LOOP ACONTECE O VALOR DE 5 DIMINUI 1, MULTIPLICANDO POR MENOS VEZES, ATÉ CHEGAR NO VOEZES 1
    // 5! 5*4*3*2*1 = 120
    valor--
    console.log(fat)
}
console.log("")
console.log(fat)