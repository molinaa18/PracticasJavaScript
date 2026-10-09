document.addEventListener("DOMContentLoaded", function() {
    const btnIniciar = document.getElementById("iniciar_btn");
    const textoResultado = document.getElementById("texto_resultado");

    btnIniciar.addEventListener("click", function() {
        let resultadoFinal = "";
        let continuar = true;

        // Bucle que pide letras hasta que el usuario decida cancelar
        while (continuar) {
            let input = prompt("Inserte una letra:");

            // CONDICIÓN DE SALIDA:
            // Si el usuario pulsa "Cancelar", prompt devuelve 'null'
            if (input === null) {
                continuar = false;
                break; // Rompemos el bucle
            }

            // Limpiamos los espacios en blanco por si el usuario teclea un espacio por error
            input = input.trim();

            // REGLA 1: Solo se puede introducir de una en una (o no dejarlo vacío)
            if (input.length !== 1) {
                alert("Error: Es obligatorio añadir una letra e introducirse de una en una.");
                continue; // Vuelve al inicio del while sin ejecutar lo de abajo
            }

            // REGLA 2: Tiene que ser estrictamente una letra.
            // Usamos una Expresión Regular que acepta la 'a' a la 'z' mayúscula y minúscula,
            // y además incluimos la ñ, Ñ y las vocales con tilde por estar en español.
            const esLetra = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]$/.test(input);

            if (!esLetra) {
                alert("Error: Sólo se pueden introducir letras.");
                continue; // Vuelve al inicio del while sin ejecutar lo de abajo
            }

            // Si pasa todas las validaciones (no es null, longitud 1 y es letra), concatenamos
            resultadoFinal += input;
        }

        // Al finalizar el bucle, mostramos el resultado en el HTML y por alert (opcional)
        if (resultadoFinal.length > 0) {
            textoResultado.textContent = resultadoFinal;
            alert("El programa ha finalizado. Letras introducidas: " + resultadoFinal);
        } else {
            textoResultado.textContent = "No se introdujo ninguna letra válida.";
        }
    });
});