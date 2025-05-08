/*

------------------------------------------------|
&& ->> E ou AND                                 |
|| ->> OU ou OR                                 |
! ->> NÃO ou NOT (USADO PARA INVERTER O VALOR)  |
------------------------------------------------|

*/
//

let n1,n2,n3,n4
n1=3
n2=65
n3=1
n4=100
console.log((n1 > n2)&&(n1 > n3)); // AND
console.log((n1 > n2)||(n1 > n3)); // OR
console.log(!(n1 > n2)&&(n1 > n3)); // AND + NOT
console.log(!(n2 > n1 || n2 > n3)); // OR + NOT, nesse caso é falso com verdadeiro, porque o NOT está negando a primeira operação, o NOT nesse caso só pega a primeira operação, se eu quiser que ele pegue as duas operações eu preciso colocar (), como no caso abaixo, como uma expressão.
console.log(!((n1 > n2)||(n1 > n3)));  // OR + NOT + (), os parenteses nesse caso são nessários por causa da precedência dos operadores, quando for true || false e vice-versa, é nessário colocar () para a resposta correta e fazer uma condição por vez.