// for é um loop definido, deterministico.
// estrutura de loop for:
// for -->> palavra-chave
// (let valor = 0; -->> abre parenteses para colocar os parametros da operação, o primeiro parametro é a variavel e o valor dela 
// valor == 0; -->> o segundo parametro é uma condição 
// valor++ -->> o terceiro parametro é o incremento ou decremento


for (let i = 0; i <= 100; i++){
  if(i%2 == 0){ // o % vai dividir o número da esquerda pela direita e pegar o resto, no caso, 0/2 == 0, se o resto foi igual a 0 o número é par, se for diferente de 0 é impar
    console.log(i + " Par")
  }
  else{
    console.log(i + " Impar")
  }
}

// FOR OF E FOR IN PARA PERCORRER COLEÇÕES

let num = [10, 20, 30, 40, 50]
let n = 0;

// FOR OF

for(n of num){ // SE EU QUISER PEGAR OS ELEMENTOS EU USO O FOR OF
  console.log(n)
}

// FOR IN 

for(n in num){ // SE EU QUISER PEGAR AS POSIÇÕES EU USO O FOR IN
  console.log(n)
}

// OUTRA SITUAÇÃO
// NESSE CASO É NECESSÁRIO USAR UM NAVEGADOR POR CONTA DO NODE.JS NÃO RECONHECER O DOCUMENT.

const objs = document.getElementsByTagName("div")
let o = 0

for(o of objs){ // SE EU QUISER PEGAR OS ELEMENTOS EU USO O FOR OF
  console.log(o)
}
for(o in objs){ // SE EU QUISER PEGAR AS POSIÇÕES EU USO O FOR IN
  console.log(o)
}
for(o in objs){
  console.log(objs[1].innerHTML= "FA") // CASO QUEIRA ESCOLHER OU ALTERAR O VALOR DE UMA POSIÇÃO DA COLEÇÃO
}
for(o in objs){
  console.log(objs[o].innerHTML= "CURSO") // CASO QUEIRA ESCOLHER OU ALTERAR O VALOR DE TODAS AS POSIÇÕES
}