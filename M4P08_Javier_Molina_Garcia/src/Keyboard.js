import React from 'react';
import Button from './Button';

function Keyboard({ onPulsacion }) {
    // Distribución del teclado basada en el wireframe
    const filas = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Espacio', 'Borrar']
    ];

    return (
        <div className="keyboard-container">
            {filas.map((fila, indexFila) => (
                <div key={indexFila} className="keyboard-row">
                    {fila.map((tecla) => (
                        <Button
                            key={tecla}
                            texto={tecla}
                            onClick={() => onPulsacion(tecla)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;