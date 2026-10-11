document.addEventListener("DOMContentLoaded", function() {
    const btnIniciar = document.getElementById("iniciar_btn");
    const textoResultado = document.getElementById("texto_resultado");

    btnIniciar.addEventListener("click", function() {
        let numeroValido = false;
        let numero;

        // 1. Pedir y validar el número
        while (!numeroValido) {
            let input = prompt("Introduce un número entero entre 0 y 10:");

            if (input === null) return; // Salir si el usuario pulsa Cancelar

            numero = parseInt(input);

            if (isNaN(numero) || numero < 0 || numero > 10) {
                alert("El número introducido no es correcto. Debe estar comprendido entre 0 y 10.");
            } else {
                numeroValido = true;
            }
        }

        // 2. Calcular el factorial
        let resultado = 1;
        let desglose = [];

        for (let i = numero; i > 0; i--) {
            resultado *= i;
            desglose.push(i); // Guardamos los números para imprimirlos bonitos luego
        }

        // 3. Mostrar el resultado por pantalla
        if (numero === 0) {
            textoResultado.textContent = "0! = 1";
        } else {
            let textoOperacion = desglose.join(" x ");
            textoResultado.textContent = `${numero}! = ${textoOperacion} = ${resultado}`;
        }
    });
});