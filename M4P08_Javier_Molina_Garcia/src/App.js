import React, { useState } from 'react';
import Result from './Result';
import Keyboard from './Keyboard';
import './App.css';

function App() {
  // Estado para almacenar el texto escrito
  const [texto, setTexto] = useState('');

  // Función para manejar las pulsaciones
  const manejarPulsacion = (valor) => {
    if (valor === 'Borrar') {
      setTexto((prev) => prev.slice(0, -1));
    } else if (valor === 'Espacio') {
      setTexto((prev) => prev + ' ');
    } else {
      setTexto((prev) => prev + valor);
    }
  };

  return (
      <div className="app-container">
        <div className="app-box">
          <Result valor={texto} />
          <Keyboard onPulsacion={manejarPulsacion} />
        </div>
      </div>
  );
}

export default App;