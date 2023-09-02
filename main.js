function validaNumero() {
  const form = document.getElementById('comparar');
  let valorA = parseFloat(document.getElementById('num1').value);
  let valorB = parseFloat(document.getElementById('num2').value);

  if (valorB > valorA)
    alert(valorB + ' eh maior que ' + valorA + ' formulario VALIDO');
  else alert(valorA + ' eh maior que ' + valorB + ' formulario INVALIDO');
}
