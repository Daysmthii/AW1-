function verificarNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado;

    if (numero > 0) {
        resultado = 'Valor Positivo';
    } else if (numero < 0) {
        resultado = 'Valor Negativo';
    } else {
        resultado = 'Igual a Zero';
    }

    document.getElementById('resultado1').textContent = resultado;
}