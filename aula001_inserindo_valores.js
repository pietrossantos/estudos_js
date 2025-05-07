"use strict"

// FORMAS DE INSERIR NÚMEROS
let num001;
let num002= 10;
console.log(num001,num002);

//ou

let num01=10, num02=10;
console.log(num01,num02);

//ou

let num1, num2, num3;
num1=num2=num3=10;
console.log(num1,num2, num3);

//ou

var idade = "\u0032" + "\u0030";
console.log(idade);

console.log("")

// INSERINDO STRING

let jogo = "sonic";

console.log(jogo);

console.log("olá" + " mundo!")
var pessoa = "Arthur";
var gênero = "masculino";

let usuario = {
    nome: pessoa,
    gênero: gênero
}

console.log(usuario)

console.log("")

// INSERINDO VALORES BOLEANOS

let sbom = true; // true = 1
let sruim = false; // false = 0
let sinal = sbom; // a variavel "sbom" é true, ou seja, é igual ao valor 1, se trocar para a variavel "sruim" o valor dela será igual a 0

console.log(sinal == 1)

// VALORES INDEFINIDOS OU INFINITOS

let casa = null;
let casa2 = Infinity;
let casa3 = -Infinity;
let casa4 = NaN;
console.log(casa, casa2, casa3, casa4);

//