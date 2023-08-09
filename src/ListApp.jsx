import {useState} from "react";

const Item = ({name, view}) => {
    return (<li >
        {name} - {view ? '👌' : '🤷‍'} - {view && '✔'}

    </li>)
}


export const ListApp = () => {
    let list = [
        {name: "Instalaciones necesarias", view: true},
        {name: "Uso de Vite", view: true},
        {name: "Componentes", view: true},
        {name: "Variabales JSX", view: true},
        {name: "Props", view: true},
        {name: "Eventos", view: true},
        {name: "UseState", view: true},
        {name: "Redux", view: false},
        {name: "customHooks", view: false},

    ]
    const [array, setArray] = useState(list)

    const addTask = () => {
        setArray([...array, {name: "Nuevo", view: false},])
    }

    return (
        <>
            <h1>
                Listado de temas
            </h1>
            <ol>
                {array.map(item => <Item key={item.name} name={item.name} view={item.view}> </Item>)}

            </ol>
            <button onClick={() => {
                addTask()
            }}> Agregar Tema
            </button>

        </>

    )
}

export default ListApp;
