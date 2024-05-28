function calcularArea() {
    const baseMayor = parseFloat(document.getElementById('baseMayor').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const baseMenor = parseFloat(document.getElementById('baseMenor').value);

    if (isNaN(baseMayor) || isNaN(altura) || isNaN(baseMenor) || baseMayor <= 0 || altura <= 0 || baseMenor <= 0) {
        alert("Por favor, ingrese valores válidos para las dimensiones.");
        return;
    }

    // Calcular el área
    const area = ((baseMayor + baseMenor) * altura) / 2;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `El área del terreno es ${area.toFixed(2)} metros cuadrados.`;
}
