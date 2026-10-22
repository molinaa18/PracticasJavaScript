import React from 'react';

function Result({ valor }) {
    return (
        <div className="result-container">
            <input
                type="text"
                className="result-input"
                value={valor}
                readOnly
                placeholder="Resultado..."
            />
        </div>
    );
}

export default Result;