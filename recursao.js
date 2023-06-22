// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  if(n == 1){
    return 1;
  }else{
    return n + somaNumeros(n - 1);
  }
}
console.log(somaNumeros(5));

// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  if(number % 2 == 0 ){
    console.log(number, "é par");
  }else{
    console.log(number, "é impar");
  }
}
ehPar(2);

function fibonacci(n) {
  // Sua implementação aqui
  const seq = [0,1];
  for(let i = 2; i < n; i++){
    seq[i] = seq[i-1] + seq[i-2]

  }
  return seq;
}
console.log(fibonacci(7));

 module.exports = { somaNumeros, ehPar, fibonacci };