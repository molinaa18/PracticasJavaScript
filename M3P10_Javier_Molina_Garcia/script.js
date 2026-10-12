document.addEventListener("DOMContentLoaded", function() {
    const inputNombre = document.getElementById("input_nombre");
    const inputApellidos = document.getElementById("input_apellidos");
    const inputEdad = document.getElementById("input_edad");

    const btnAnadir = document.getElementById("btn_anadir");
    const btnMostrar = document.getElementById("btn_mostrar");
    const contadorTxt = document.getElementById("contador");
    const resultadosDiv = document.getElementById("resultados");

    class Persona {
        constructor(nombre, apellidos, edad) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
        }
    }

    let arrayPersonas = [];

    function funcionPersona() {
        const nombre = inputNombre.value.trim();
        const apellidos = inputApellidos.value.trim();
        const edad = inputEdad.value.trim();

        if (!nombre || !apellidos || !edad) {
            alert("Por favor, rellena todos los campos antes de añadir.");
            return;
        }

        const nuevaPersona = new Persona(nombre, apellidos, parseInt(edad));
        arrayPersonas.push(nuevaPersona);

        contadorTxt.textContent = arrayPersonas.length;

        inputNombre.value = "";
        inputApellidos.value = "";
        inputEdad.value = "";
        inputNombre.focus();

        // Límite de 5 personas
        if (arrayPersonas.length === 5) {
            // Bloqueamos la entrada de datos
            inputNombre.disabled = true;
            inputApellidos.disabled = true;
            inputEdad.disabled = true;
            btnAnadir.disabled = true;

            // Se habilita el botón 'mostrar'
            btnMostrar.disabled = false;

            alert("Has completado los 5 registros. Ahora puedes hacer clic en 'Mostrar'.");
        }
    }

    function mostrarPersonas() {
        let contenidoHTML = "<ul>";
        arrayPersonas.forEach((persona, index) => {
            contenidoHTML += `<li><strong>${index + 1}.</strong> ${persona.nombre} ${persona.apellidos} - ${persona.edad} años</li>`;
        });
        contenidoHTML += "</ul>";

        resultadosDiv.innerHTML = contenidoHTML;
    }

    btnAnadir.addEventListener("click", funcionPersona);
    btnMostrar.addEventListener("click", mostrarPersonas);
});