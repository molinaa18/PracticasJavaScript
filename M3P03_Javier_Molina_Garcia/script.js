const inputNota = document.getElementById('entrada-nota');
const boton = document.getElementById('boton-evaluar');
const parrafo = document.getElementById('resultado-nota');

boton.addEventListener('click', function() {

    let entrada = inputNota.value;
    entrada = entrada.replace(',', '.');
    const nota = parseFloat(entrada);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        parrafo.textContent = 'Por favor, introduce una nota numérica válida entre 0 y 10.';
    } else if (nota < 3) {
        parrafo.textContent = `Tu nota es un ${nota.toFixed(2)}: Muy deficiente`;
    } else if (nota < 5) {
        parrafo.textContent = `Tu nota es un ${nota.toFixed(2)}: Insuficiente`;
    } else if (nota < 6) {
        parrafo.textContent = `Tu nota es un ${nota.toFixed(2)}: Suficiente`;
    } else if (nota < 7) {
        parrafo.textContent = `Tu nota es un ${nota.toFixed(2)}: Bien`;
    } else if (nota < 9) {
        parrafo.textContent = `Tu nota es un ${nota.toFixed(2)}: Notable`;
    } else {
        parrafo.textContent = `Tu nota es un ${nota.toFixed(2)}: Sobresaliente`;
    }
});