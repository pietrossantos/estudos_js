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
