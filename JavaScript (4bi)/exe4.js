function encontrarMaiorMenor() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const maior = Math.max(num1, num2, num3);
    const menor = Math.min(num1, num2, num3);
    document.getElementById('resultado4').textContent = `Maior: ${maior}, Menor: ${menor}`;
}