function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, ingrese valores válidos para la estatura y el peso.");
        return;
    }
    
    // Calcular el IMC
    const imc = peso / (altura * altura);
    
    // Mostrar el resultado
    alert(`Tu IMC es ${imc.toFixed(2)}`);
}
