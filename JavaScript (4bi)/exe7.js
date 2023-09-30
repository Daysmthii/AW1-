function descobrirDiaSemana() {
    const dia = parseInt(document.getElementById('dia').value);
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const resultado = dia >= 1 && dia <= 7 ? diasSemana[dia - 1] : "Dia inválido";
    document.getElementById('resultado7').textContent = resultado;
}