let num1 = 10
let num2 = 18
let sts = "A"

// COMO DESCOBRIR SE UM NÚMERO É PAR OU IMPAR USANDO O OPERADOR TERNÁRIO
let res1 = (!(num1%2) ? "par" : "impar") // TIVE QUE USAR A NEGAÇÃO E OS PARENTESES PARA NEGAR A EXPRESSÃO "num1%2"
// SE O RESTO DE 10 (QUE É 0) FOR IGUAL A 0, É PAR, SE FOR DIFERENTE DE 0 A RESPOSTA É IMPAR
console.log(res1) // PAR

let res2 = ((num1 >= 18) ? "acesso liberado!" : "acesso negado!")
console.log(res2)

let res3 =((sts == "A") ? "ativo" : "inativo")
console.log(res3)