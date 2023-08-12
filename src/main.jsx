import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from "./FirstComponent.jsx";
import CountApp from "./CountApp.jsx";
import ListApp from "./ListApp.jsx";
import './styles.css'
import UserApp from "./componenst/UserApp.jsx";
import {HooksApp} from "./HooksApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap'; // Importa los scripts de Bootstrap

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirstComponent title='va la prop' subtitle='subtitle' numberprop={4}></FirstComponent>*/}
        {/*<CountApp value={0}> </CountApp>*/}
        {/*<ListApp></ListApp>*/}
        {/*<h1>useEffect</h1>*/}
        {/*<UserApp></UserApp>*/}
        <HooksApp></HooksApp>
        <button className="btn btn-primary">Botón Primario</button>
        <button className="btn btn-secondary">Botón Secundario</button>
        <button className="btn btn-success">Botón de Éxito</button>
        <button className="btn btn-danger">Botón de Peligro</button>
        <button className="btn btn-warning">Botón de Advertencia</button>
        <button className="btn btn-info">Botón de Información</button>

    </React.StrictMode>,
)
