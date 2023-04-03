let masculino = 0;
let feminino = 0;

for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Digite a altura em metros da pessoa (ex: 1,90) " + i + ":").replace(',', '.'));
  let peso = parseFloat(prompt("Digite o peso em kg da pessoa (ex: 90) " + i + ":").replace(',', '.'));
  let sexo = prompt("Digite o sexo da pessoa " + i + " (M/F):");
  
  let imc = peso / (altura ** 2);
  document.write("A pessoa " + i + " tem um IMC de " + imc.toFixed(2) + "<br>");
  
  if (sexo.toUpperCase() === "M") {
    masculino++;
  } else if (sexo.toUpperCase() === "F") {
    feminino++;
  }
}

document.write("O número de pessoas do sexo masculino é: " + masculino + "<br>");
document.write("O número de pessoas do sexo feminino é: " + feminino + "<br>");
