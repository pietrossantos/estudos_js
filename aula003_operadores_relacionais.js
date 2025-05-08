/*

------------------------------------|
== ->> (igual a)                    |
!= ->> (não igual a)                |
=== ->> (estritamente igual a)      |
!== ->> (estritamente não igual a)  |
> ->> (maior que)                   |
< ->> (menor que)                   |
>= ->> (maior ou igual a)           |
<= ->> (menor ou igual a)           |
------------------------------------|

*/
//

let num1, num2;
num1 = num2 = 10;
console.log(num1, num2)

// IGUAL A (==)

console.log(num1 == num2);

// NÃO IGUAL A (!=)

console.log(num1 != num2);

// ESTRITAMENTE IGUAL A (===)

let num01= "2", num02= 2;

console.log(num01, num02);
console.log(num01 === num02);
console.log(num1 === num2);

// ESTRITAMENTE NÃO IGUAL A (!==)

console.log(num01 !== num02);
console.log(num1 !== num2);

// MAIOR QUE (>)

console.log(num1 > 5);

// MENOR QUE (<)

console.log(num1 < 5);

// MAIOR OU IGUAL A (>=)

console.log(num1 >= 5);
console.log(num1 >= 10);

// MENOR OU IGUAL A (<=)

console.log(num1 <= 5);
console.log(num1 <= 10);
