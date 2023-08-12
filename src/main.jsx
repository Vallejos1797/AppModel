import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from "./FirstComponent.jsx";
import CountApp from "./CountApp.jsx";
import ListApp from "./ListApp.jsx";
import './styles.css'
import UserApp from "./componenst/UserApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstComponent title='va la prop' subtitle='subtitle' numberprop={4}></FirstComponent>
        <CountApp value={0}> </CountApp>
        <ListApp></ListApp>
        <h1>useEffect</h1>
        <UserApp></UserApp>
    </React.StrictMode>,
)
