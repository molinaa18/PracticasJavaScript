document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("#tabla_imagenes tbody");
    const btnAnadir = document.getElementById("btn_anadir_registro");

    // 1. OBTENER DATOS (GET)
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(response => response.json())
        .then(data => {
            let contenidoTabla = "";

            data.forEach(photo => {
                contenidoTabla += `
                    <tr id="fila_${photo.id}">
                        <td>
                            <strong>Álbum:</strong> ${photo.albumId} <br><br>
                            <strong>Registro:</strong> ${photo.id}
                        </td>
                        <td>${photo.title}</td>
                        <td><img src="${photo.thumbnailUrl}" alt="Imagen ${photo.id}"></td>
                        <td>
                            <button class="btn_eliminar" onclick="eliminarRegistro(${photo.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
            });

            tbody.innerHTML = contenidoTabla;
        })
        .catch(error => console.error("Error al obtener los datos:", error));


    // 2. ELIMINAR REGISTRO (DELETE)
    window.eliminarRegistro = function(idRegistro) {
        // Petición DELETE a la API
        fetch(`https://jsonplaceholder.typicode.com/photos/${idRegistro}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log(`Registro ${idRegistro} eliminado correctamente de la API.`);
                    const filaAEliminar = document.getElementById(`fila_${idRegistro}`);
                    if (filaAEliminar) {
                        filaAEliminar.remove();
                    }
                } else {
                    console.error("Error al intentar eliminar de la API.");
                }
            })
            .catch(error => console.error("Error de red al eliminar:", error));
    };


    // 3. AÑADIR NUEVO REGISTRO (POST)
    btnAnadir.addEventListener("click", function() {
        // Datos a añadir especificados en el enunciado
        const nuevoRegistro = {
            albumId: 1,
            title: "Javier Molina Garcia",
            url: "https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg",
            thumbnailUrl: null
        };

        // Petición POST a la API
        fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify(nuevoRegistro), // Convertimos el objeto JS a cadena JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log("Inserción exitosa en la API. Resultado:", json);
                alert("Registro añadido a la API. Revisa la consola para ver el resultado.");
            })
            .catch(error => console.error("Error al añadir el registro:", error));
    });
});