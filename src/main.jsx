import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from "./FirstComponent.jsx";
import CountApp from "./CountApp.jsx";
import ListApp from "./ListApp.jsx";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstComponent title='va la prop' subtitle='subtitle' numberprop={4}></FirstComponent>
        <CountApp value={0}> </CountApp>
        <ListApp></ListApp>
    </React.StrictMode>,
)
