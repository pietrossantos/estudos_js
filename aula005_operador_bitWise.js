/*

--------------------------------|
& ->> AND bit a bit             |
| ->> OR bit a bit              |
^ ->> XOR bit a bit             |
~ ->> NOT bit a bit             |
<< ->> deslocamento a esquerda  | 
>> ->> deslocamento a direita   |
--------------------------------|

*/ 

// NÚMEROS EM BINÁRIO
// 10 = 00001010
// 11 = 00001011


let n1,n2
n1= 10
n2=11


// AND, BIT A BIT

let res1 = n1 & n2; // SÓ IRÁ SER SE TIVER EQUIVALÊNCIA, POR EXEMPLO: 1, CASO SEJA DIFERENTE DE 1 OU UM DOS NÚMEROS SEJA 0, IRÁ RETORNAR 0                                                1                                                 
// NO CASO, 00001010
//          00001011
//          00001010
console.log(res1) // irá retornar 10

// OR, BIT A BIT

let res2 = n1 | n2; // ONDE TIVER O BIT 1 IRÁ RETORNAR 1
// 00001010
// 00001011
// 00001011

console.log(res2); // irá retornar 11

// XOR, BIT A BIT

let res3 = n1 ^ n2; // SÓ IRÁ RETORNAR 1 SE TIVER 1 E NÃO TIVER EQUIVALÊNCIA
// 00001010
// 00001011
// 00000001

console.log(res3) // irá retornar 1

// NOT, BIT A BIT

let res4 = ~n1; // O NOT INVERTE TODOS OS BIT, SE FOR 1, SE TORNA 0, SE FOR 0, SE TORNA 1
let res5 = ~n2;
// 00001010
// 11110101
// -11
// 00001011
// 11110100
// -12

console.log(res4, res5);

// << DESLOCAMENTO PARA A ESQUERDA

let res6 = n1 << 1; // IRÁ SE DESLOCAR PARA A ESQUERDA, DOBRANDO O VALOR
// 00001010 = 10
// 00010100 = 20
// 00101000 = 40 E ASSIM POR DIANTE

console.log(res6);

// >> DESLOCAMENTO PARA A DIREITA

let res7 = n1 >> 1 // IRÁ SE DESLOCAR PARA A DIREITA, DIVIDINDO O VALOR
// 00001010 = 10
// 00000101 = 5
// 00000010 = 2 E ASSIM POR DIANTE

console.log(res7);