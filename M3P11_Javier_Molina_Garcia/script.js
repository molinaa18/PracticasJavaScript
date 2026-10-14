document.addEventListener("DOMContentLoaded", function() {
    // Arrays para traducir los días y meses al formato correspondiente
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const ahora = new Date();

    const diaSemana = dias[ahora.getDay()];
    const diaMes = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const anio = ahora.getFullYear();

    const horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    // Cero a la izquierda si los minutos son de un solo dígito (ej: 15:05)
    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    // Cadena de texto con el formato exacto
    const mensaje = `Hoy es ${diaSemana}, ${diaMes} de ${mes} de ${anio}, y son las ${horas}:${minutos} horas`;

    // Se inserta en el documento
    document.getElementById("fecha_hora").textContent = mensaje;
});