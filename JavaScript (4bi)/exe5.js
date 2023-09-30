function verificarParImpar() {
    const numero = parseInt(document.getElementById('parImpar').value);
    const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
    document.getElementById('resultado5').textContent = resultado;
}
