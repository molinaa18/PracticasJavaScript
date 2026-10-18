document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("#tabla_imagenes tbody");

    // Petición a la API. Limitado a 20.
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(response => response.json()) // Transformar a formato JSON
        .then(data => {
            let contenidoTabla = "";

            // Se recorre el array de 20 imágenes
            data.forEach(photo => {
                contenidoTabla += `
                    <tr>
                        <td>
                            <strong>Álbum:</strong> ${photo.albumId} <br><br>
                            <strong>Registro:</strong> ${photo.id}
                        </td>
                        <td>${photo.title}</td>
                        <td><img src="${photo.thumbnailUrl}" alt="Imagen del registro ${photo.id}"></td>
                    </tr>
                `;
            });

            tbody.innerHTML = contenidoTabla;
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
            tbody.innerHTML = `<tr><td colspan="3" style="color:red;">Error al cargar la API. Revisa la consola.</td></tr>`;
        });
});