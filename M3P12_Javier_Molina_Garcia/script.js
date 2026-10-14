document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario_registro");

    formulario.addEventListener("submit", function(e) {
        // Evita que la página se recargue al enviar el formulario
        e.preventDefault();

        // Valores de campos (sin espacios - trim)
        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const passwordRepeat = document.getElementById("password_repeat").value.trim();

        // 1. Validar Usuario (al menos 4 caracteres)
        if (usuario.length < 4) {
            alert("Error: El nombre de usuario debe tener al menos 4 caracteres.");
            return;
        }

        // 2. Validar Correo Electrónico con la RegExp
        const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regexEmail.test(email)) {
            alert("Error: El correo electrónico introducido no es válido.");
            return;
        }

        // 3. Validar Contraseña (entre 6 y 12 caracteres)
        if (password.length < 6 || password.length > 12) {
            alert("Error: La contraseña debe tener entre 6 y 12 caracteres.");
            return;
        }

        // 4. Validar Repita Contraseña (deben coincidir)
        if (password !== passwordRepeat) {
            alert("Error: Las contraseñas no coinciden.");
            return;
        }

        alert("¡Formulario validado y enviado con éxito!");

        // Limpia el formulario después de ser finalizado con éxito
        formulario.reset();
    });
});