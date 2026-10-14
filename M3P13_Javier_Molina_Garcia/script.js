document.addEventListener("DOMContentLoaded", function() {

    const btnTotal = document.getElementById("btn_total");
    const btnPenultimo = document.getElementById("btn_penultimo");
    const btnTwitter = document.getElementById("btn_twitter");
    const btnParrafo3 = document.getElementById("btn_parrafo3");

    // Todos los enlaces de la página
    const enlaces = document.getElementsByTagName("a");

    // 1. El número de enlaces que contiene la página.
    btnTotal.addEventListener("click", function() {
        alert(`La página contiene un total de ${enlaces.length} enlaces.`);
    });

    // 2. La dirección a la que enlaza el penúltimo enlace.
    btnPenultimo.addEventListener("click", function() {
        if (enlaces.length >= 2) {
            // El penúltimo es el total menos 2 (ya que los arrays empiezan en 0)
            const direccionPenultimo = enlaces[enlaces.length - 2].getAttribute("href");
            alert(`El penúltimo enlace dirige a: ${direccionPenultimo}`);
        } else {
            alert("No hay suficientes enlaces para buscar el penúltimo.");
        }
    });

    // 3. El número de enlaces que nos dirigen a https://www.twitter.com
    btnTwitter.addEventListener("click", function() {
        let contadorTwitter = 0;

        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].getAttribute("href") === "https://www.twitter.com") {
                contadorTwitter++;
            }
        }

        alert(`Hay ${contadorTwitter} enlaces que dirigen a https://www.twitter.com`);
    });

    // 4. El número de enlaces que contiene el tercer párrafo.
    btnParrafo3.addEventListener("click", function() {
        const parrafos = document.getElementsByTagName("p");

        if (parrafos.length >= 3) {
            // El tercer párrafo es el índice 2
            const enlacesTercerParrafo = parrafos[2].getElementsByTagName("a");
            alert(`El tercer párrafo contiene ${enlacesTercerParrafo.length} enlaces.`);
        } else {
            alert("La página no tiene un tercer párrafo.");
        }
    });
});