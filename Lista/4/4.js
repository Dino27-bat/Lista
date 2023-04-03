var anterior = 0;
var proximo = 1;

for (let i = 0; i < 15; i++) {
  var soma = anterior + proximo;
  anterior = proximo;
  proximo = soma;
  document.write(proximo + ' ');
}
document.write('<br> <img src="./Fibonacci.jpg" alt="Sumiu">')