const string = 'es String'
const number = 23456
const array = [' String',' String2',' String3']
const boolean = false
const funcion = () => 1 + 1
const objeto = {nombre: 'Curso de java', duracion: 4}
const fecha= new Date()


function FirstComponent() {
    return (
        <>
            <h1>Variables en JSX</h1>
            <h2>Tipo string: {string}</h2>
            <h2>Tipo number: {number}</h2>
            <h2>Tipo array: {array}</h2>
            <h2>Tipo boolean: {boolean}</h2>
            <h2>Tipo funcion(): {funcion()}</h2>
            <h2>Tipo objeto: {JSON.stringify(objeto)}</h2>
            <h2>Tipo fecha: {JSON.stringify(fecha)}</h2>
        </>


    )
}

export default FirstComponent;
