/* 

--------------------------------|
+  ->> adição                   |
-  ->> subtração                |
*  ->> multiplicação            |
/  ->> divisão                  |
%  ->> módulo(resto da divisão) | 
**  ->> exponenciação           |
++  ->> incremento              |
--  ->> decremento              |
--------------------------------|

*/
//
// ADIÇÃO

let value1=4, value2=-5, value3=24, value4=639, value5=-500;

let contaAdicao = (value1 + value2);
let contaAdicao2 = (value5 + value2);
let contaAdicao3 = (value4 + value2 + value3);
console.log(contaAdicao, contaAdicao2, contaAdicao3);

console.log()

// SUBTRAÇÃO

let contaSubtracao = (value2 - value3);
let contaSubtracao2 = (value1 - value4);
console.log(contaSubtracao, contaSubtracao2);

console.log()

// MULTIPLICAÇÃO

let contaVezes = (value1 * value5);
console.log(contaVezes);

console.log()

// DIVISÃO

let contaDivisao = (value5 / value3);
let contaDivisao2 = (value4 / value3);
console.log(contaDivisao, contaDivisao2);

console.log()

// MÓDULO(RESTO DA DIVISÃO)

let contaResto = (value1 % value4)
console.log(contaResto);

console.log()

// EXPONENCIAÇÃO

let contaExp = value1 ** 4;
console.log(contaExp);

console.log()

// INCREMENTO

console.log(value2++); // PRIMEIRO IMPRIME O VALOR DEPOIS INCREMENTA
console.log(value2); // IRÁ RETORNAR O VALOR COM O INCREMENTO
console.log(++value2) // PRIMEIRO FAZ O INCREMENTO
console.log(value2+= 53); // INCREMENTANDO COM UM NÚMERO DIFERENTE DE 1

console.log()

// DECREMENTO 

console.log(value3--); // PRIMEIRO IMPRIME O VALOR DEPOIS DECREMENTA
console.log(value3); // IRÁ RETORNAR O VALOR COM O DECREMENTO
console.log(--value3) // PRIMEIRO FAZ O DECREMENTO
console.log(value3-= 22); // DECREMENTANDO COM UM NÚMERO DIFERENTE DE 1

// <<EXCESSÕES>> (-) (NEGAÇÃO OU INVERSÃO), (+) (CONCATENAÇÃO)

// INVERSÃO COM (-)

console.log(-value5) // NEGA A VARIAVEL VALUE55 E VALUE2, INVERTENDO SEU SINAL
console.log(-value2)

// CONCATENAÇÃO COM (+)

console.log(value2 + "" + value2) //COM A STRING NO MEIO ACABASSE CONCATENANDO OS DOIS VALORES

// OBS: SE USAR CONST NO LUGAR DO LET NÃO SERÁ POSSIVEL FAZER INCREMENTO OU DECREMENTO PORQUE O VALOR NÃO PODE SER ALTERADO COM CONST!!!
