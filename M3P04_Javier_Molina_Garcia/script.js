const formulario = document.getElementById('formulario-notas');
const parrafo = document.getElementById('resultado-nota');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let suma = 0;

    for (let i = 1; i <= 6; i++) {
        const nota = parseFloat(document.getElementById(`nota${i}`).value);
        suma += nota;
    }

    const media = suma / 6;
    let calificacion;

    if (media < 3) {
        calificacion = 'Muy deficiente';
    } else if (media < 5) {
        calificacion = 'Insuficiente';
    } else if (media < 6) {
        calificacion = 'Suficiente';
    } else if (media < 7) {
        calificacion = 'Bien';
    } else if (media < 9) {
        calificacion = 'Notable';
    } else {
        calificacion = 'Sobresaliente';
    }

    parrafo.textContent = `El alumno ha sacado una media final de ${media.toFixed(2)} (${calificacion})`;
});