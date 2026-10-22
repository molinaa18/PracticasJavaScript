import React from 'react';

function Button({ texto, onClick }) {
    // Asignar clases específicas para dar mayor anchura al espacio
    let claseBoton = "btn-tecla";
    let contenido = texto;

    if (texto === 'Espacio') {
        claseBoton += " btn-espacio";
        contenido = ""; // El espacio se muestra sin texto
    } else if (texto === 'Borrar') {
        claseBoton += " btn-borrar";
        contenido = "⌫"; // Símbolo para el borrado
    }

    return (
        <button className={claseBoton} onClick={onClick}>
            {contenido}
        </button>
    );
}

export default Button;