// Definir a quantidade de números a serem exibidos
const quantidade = 15;

// Inicializar as variáveis
let num1 = 1, num2 = 1;

// Calcular e exibir os números da sequência
for (let i = 1; i <= quantidade; i++) {
  document.write(num1 + ' ');
  const proximoNum = num1 + num2;
  num1 = num2;
  num2 = proximoNum;
}
document.write('<br> <img src="./Fibonacci.jpg" alt="Sumiu">')