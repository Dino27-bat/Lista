let numero = parseInt(prompt('Digite um número: '));
if (numero > 10 || numero < 1) {
    document.write('Número invalido, digite um número de 1 a 10!!!');
}
else {
    for (var i = 1; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
    }
}