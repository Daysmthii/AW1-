function ordenarNumeros() {
    const a = parseFloat(document.getElementById('a').value); 
    const b = parseFloat(document.getElementById('b').value);
    const resultado = a < b ? `${a} ${b}` : `${b} ${a}`;
    document.getElementById('resultado2').textContent = resultado;
}
