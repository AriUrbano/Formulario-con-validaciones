// Selecciona los elementos del formulario
const nombreCompleto = document.getElementById('nombreCompleto');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmarContrasena');

const errorNombre = document.getElementById('errorNombre');
const errorCorreo = document.getElementById('errorCorreo');
const errorContrasena = document.getElementById('errorContrasena');
const errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');

// Expresiones regulares para validación
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const patronContrasena = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Validación en tiempo real
nombreCompleto.addEventListener('input', validarNombre);
correo.addEventListener('input', validarCorreo);
contrasena.addEventListener('input', validarContrasena);
confirmarContrasena.addEventListener('input', validarConfirmarContrasena);

// Funciones de validación
function validarNombre() {
    if (nombreCompleto.value.trim().length < 3) {
        nombreCompleto.classList.remove('valido');
        nombreCompleto.classList.add('invalido');
        errorNombre.classList.add('show');
    } else {
        nombreCompleto.classList.remove('invalido');
        nombreCompleto.classList.add('valido');
        errorNombre.classList.remove('show');
    }
}

function validarCorreo() {
    if (!patronCorreo.test(correo.value.trim())) {
        correo.classList.remove('valido');
        correo.classList.add('invalido');
        errorCorreo.classList.add('show');
    } else {
        correo.classList.remove('invalido');
        correo.classList.add('valido');
        errorCorreo.classList.remove('show');
    }
}

function validarContrasena() {
    if (!patronContrasena.test(contrasena.value.trim())) {
        contrasena.classList.remove('valido');
        contrasena.classList.add('invalido');
        errorContrasena.classList.add('show');
    } else {
        contrasena.classList.remove('invalido');
        contrasena.classList.add('valido');
        errorContrasena.classList.remove('show');
    }
    validarConfirmarContrasena(); // Validar también la confirmación de contraseña
}

function validarConfirmarContrasena() {
    if (confirmarContrasena.value.trim() !== contrasena.value.trim()) {
        confirmarContrasena.classList.remove('valido');
        confirmarContrasena.classList.add('invalido');
        errorConfirmarContrasena.classList.add('show');
    } else {
        confirmarContrasena.classList.remove('invalido');
        confirmarContrasena.classList.add('valido');
        errorConfirmarContrasena.classList.remove('show');
    }
}

// Validar el formulario antes de enviar
document.getElementById('formularioRegistro').addEventListener('submit', function (evento) {
    evento.preventDefault(); // Evitar el envío del formulario

    validarNombre();
    validarCorreo();
    validarContrasena();
    validarConfirmarContrasena();

    // Verificar si hay errores
    const errores = document.querySelectorAll('.error-message.show');
    if (errores.length === 0) {
        alert('Formulario enviado con éxito.');
        this.reset(); // Limpiar el formulario

        // Quitar las clases de validación después de enviar
        nombreCompleto.classList.remove('valido');
        correo.classList.remove('valido');
        contrasena.classList.remove('valido');
        confirmarContrasena.classList.remove('valido');
    }
});