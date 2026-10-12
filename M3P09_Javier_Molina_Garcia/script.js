document.addEventListener("DOMContentLoaded", function() {
    const btnGenerar = document.getElementById("btn_generar");
    const contenedorTablas = document.getElementById("contenedor_tablas");

    btnGenerar.addEventListener("click", generar_tabla);

    function generar_tabla() {
        const tabla = document.createElement("table");
        const tbody = document.createElement("tbody");

        tabla.appendChild(tbody);

        // Bucle 'for' para crear 3 filas
        for (let i = 0; i < 3; i++) {
            let fila = tbody.insertRow(i);

            // Bucle 'for' para crear 3 columnas dentro de cada fila
            for (let j = 0; j < 3; j++) {
                let celda = fila.insertCell(j);

                celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            }
        }

        contenedorTablas.appendChild(tabla);
    }
});