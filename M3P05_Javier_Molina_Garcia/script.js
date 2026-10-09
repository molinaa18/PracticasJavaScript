document.addEventListener("DOMContentLoaded", function() {
    const botonElegir = document.getElementById("elegir_menu");

    const primerosPlatos = [
        "Ensalada mixta",
        "Porra antequerana",
        "Sopa de picadillo",
        "Gazpacho andaluz",
        "Croquetas caseras"
    ];

    const segundosPlatos = [
        "Filete empanado con patatas",
        "Bacalao a la plancha",
        "Solomillo de cerdo a la pimienta",
        "Pollo asado con verduras",
        "Lasaña de carne"
    ];

    botonElegir.addEventListener("click", function() {
        let numPrimero = prompt("Indica el número del primer plato (1-5):");
        let numSegundo = prompt("Indica el número del segundo plato (1-5):");

        let indicePrimero = parseInt(numPrimero) - 1;
        let indiceSegundo = parseInt(numSegundo) - 1;

        if (
            indicePrimero >= 0 && indicePrimero < primerosPlatos.length &&
            indiceSegundo >= 0 && indiceSegundo < segundosPlatos.length
        ) {
            let platoElegido1 = primerosPlatos[indicePrimero];
            let platoElegido2 = segundosPlatos[indiceSegundo];

            alert(`Ha elegido de primer plato ${platoElegido1} y de segundo plato ${platoElegido2}`);
        } else {
            alert("Error: Por favor, introduce números válidos que correspondan al menú (del 1 al 5).");
        }
    });
});