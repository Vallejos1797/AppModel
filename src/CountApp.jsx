import { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ numberAttributes, onClick }) => {
    return (
        <button onClick={onClick}>
            Soy un botón con {numberAttributes} atributo
        </button>
    );
};

Button.propTypes = {
    numberAttributes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

function CountApp({ value }) {
    const [contador, setContador] = useState(value);

    const increaseCounter = () => {
        setContador(contador + 1);
    };

    return (
        <>
            <h1>Contador</h1>
            <p>Value : {contador}</p>
            <Button
                numberAttributes={1}
                onClick={() => {
                    // Lógica del primer botón (si es necesaria)
                }}
            />

            <br />

            <h2>Aumentar contador.... ↓</h2>
            <Button
                numberAttributes={2}
                onClick={() => {
                    increaseCounter(); // Incrementa el contador solo para el segundo botón
                }}
            />
        </>
    );
}

CountApp.propTypes = {
    value: PropTypes.number,
};

export default CountApp;
