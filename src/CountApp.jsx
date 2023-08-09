import PropTypes from 'prop-types';


const handleClickOneAttribute = (event) => {
    console.log('es un botón presionado', event);
};

const handleClickOneMoreAttribute = (event, arg) => {
    console.log('es un botón presionado', event);
    console.log('con arg', arg);
};

const Button = ({ numberAttributes }) => {
    const handleButtonClick = (event) => {
        if (numberAttributes > 1) {
            handleClickOneMoreAttribute(event, 'otros');
        } else {
            handleClickOneAttribute(event);
        }
    };

    return (
        <button onClick={handleButtonClick}>
            Soy un botón con {numberAttributes} atributo
        </button>
    );
};
Button.propTypes = {
    numberAttributes: PropTypes.number.isRequired,
};

function CountApp() {
    return (
        <>
            <h1>Contador</h1>

            <Button numberAttributes={1}>

            </Button>
            <br/>
            <Button  numberAttributes={2}>

            </Button>
        </>


    )
}

export default CountApp
