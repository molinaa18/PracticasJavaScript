document.addEventListener("DOMContentLoaded", function() {

    const btnLocal = document.getElementById("btn_local");
    const btnSession = document.getElementById("btn_session");
    const btnMostrar = document.getElementById("btn_mostrar");
    const resultadosDiv = document.getElementById("resultados");

    // Botón LocalStorage
    btnLocal.addEventListener("click", function() {
        // Se comprueba si la clave ya existe
        if (localStorage.getItem("M4P02")) {
            alert("Error: El dato M4P02 ya existe en localStorage.");
        } else {
            localStorage.setItem("M4P02", "Javier Molina Garcia");
            alert("Dato guardado correctamente en localStorage.");
        }
    });

    // Botón SessionStorage
    btnSession.addEventListener("click", function() {
        sessionStorage.setItem("Date", Date.now());
        alert("Fecha actualizada en sessionStorage.");
    });

    // Botón Mostrar
    btnMostrar.addEventListener("click", function() {
        const localData = localStorage.getItem("M4P02") || "No hay datos";
        const sessionData = sessionStorage.getItem("Date") || "No hay datos";

        resultadosDiv.innerHTML = `
            <strong>Datos en LocalStorage (Persistentes):</strong>
            <br>M4P02: ${localData}
            <br><br>
            <strong>Datos en SessionStorage (Por pestaña):</strong>
            <br>Date: ${sessionData}
        `;
    });
});