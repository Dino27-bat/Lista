let hom = 0;
let mul = 0;

for (let i = 1; i <= 5; i++) {
  const alt = parseFloat(prompt("Digite a altura da pessoa " + i + ":"));
  const pes = parseFloat(prompt("Digite o peso da pessoa " + i + ":"));
  const sex = prompt(`Digite o sexo da pessoa(M ou F em maiúsculo, qualquer outra letra não funcionara!!!):`);

  const imc = pes / (alt * alt);

  if (sex === 'M') {
    hom++;
  } else if (sex === 'F') {
    mul++;
  }

  document.write("O IMC da pessoa " + i + " é: " + imc + "<br>");
}

document.write("Número de homens: " + hom + "<br>");
document.write("Número de mulheres: " + mul);
