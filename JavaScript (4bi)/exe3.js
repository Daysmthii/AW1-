function verificarIdade() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = idade >= 18 ? `${nome} é maior de 18 e tem ${idade} anos` : `${nome} não é maior de 18 e tem ${idade} anos`;
    document.getElementById('resultado3').textContent = resultado;
}
