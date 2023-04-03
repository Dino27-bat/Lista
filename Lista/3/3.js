var res = 1n;

for (var i = 1n; i <= 500n; i++) {
  res *= i;
}

alert("O resultado é: " + res);