document.addEventListener("DOMContentLoaded", function() {
    const btnIniciar = document.getElementById("iniciar_btn");
    const resultadosDiv = document.getElementById("resultados");

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    btnIniciar.addEventListener("click", function() {
        let monedas = 50;
        let historialNumeros = [];
        resultadosDiv.innerHTML = "";

        while (monedas > 0 && monedas < 100) {
            let numeroElegido = prompt(`Tienes ${monedas} monedas.\nElige un número al que apostar (1 - 6):`);

            if (numeroElegido === null) break;

            numeroElegido = parseInt(numeroElegido);
            if (isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 6) {
                alert("Por favor, introduce un número entero entre 1 y 6.");
                continue;
            }

            let apuesta = prompt(`¿Cuántas monedas quieres apostar? (Min: 1, Max: ${monedas})`);

            if (apuesta === null) break;

            apuesta = parseInt(apuesta);
            if (isNaN(apuesta) || apuesta < 1 || apuesta > monedas) {
                alert(`Por favor, introduce un número entre 1 y las monedas disponibles (${monedas}).`);
                continue;
            }

            monedas -= apuesta;

            let numeroAleatorio = getRandomInt(1, 7);
            historialNumeros.push(numeroAleatorio);

            if (numeroElegido === numeroAleatorio) {
                let ganancia = apuesta * 2;
                monedas += ganancia;
                alert(`¡Acertaste! Ha salido el ${numeroAleatorio}.\nGanas ${ganancia} monedas.\nMonedas actuales: ${monedas}`);
            } else {
                alert(`Has perdido ${apuesta} monedas.\nHa salido el ${numeroAleatorio}.\nTe quedan ${monedas} monedas.`);
            }
        }

        if (monedas <= 0) {
            alert("Game Over");
        } else if (monedas >= 100) {
            alert("¡Enhorabuena! ¡Has ganado el juego!");
        }

        if (historialNumeros.length > 0) {
            resultadosDiv.innerHTML = `<h3>Fin del juego. Números que han salido:</h3><p>${historialNumeros.join(", ")}</p>`;
        }
    });
});