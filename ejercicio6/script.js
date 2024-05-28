function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const email = document.getElementById('email').value.trim();
    let mensaje = '';
    let valido = true;

    
    if (nombre === '' || nombre.length > 50) {
        mensaje += 'La casilla Nombre no puede estar vacía y puede tener un máximo de 50 caracteres.<br>';
        valido = false;
    }

    
    if (apellido === '' || apellido.length > 50) {
        mensaje += 'La casilla Apellido no puede estar vacía y puede tener un máximo de 50 caracteres.<br>';
        valido = false;
    }

    
    if (isNaN(edad) || edad < 18) {
        mensaje += 'Tienes que ser mayor de edad para registrarte. No puedes usar números negativos.<br>';
        valido = false;
    }

    
    if (isNaN(altura) || altura <= 0 || altura > 230) {
        mensaje += 'La altura maxima es 230 cm. Los valores negativos no son válidos.<br>';
        valido = false;
    }

    
    if (email === '' || !email.includes('@')) {
        mensaje += 'La casilla Correo electrónico no puede estar vacía y debe incluir el "@"<br>';
        valido = false;
    }

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    if (valido) {
        resultado.style.color = 'green';
        resultado.innerHTML = 'Todos los datos son válidos. Ya estás registrado. Gracias!';
    } else {
        resultado.style.color = 'red';
        resultado.innerHTML = mensaje;
    }
}
