import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from "./FirstComponent.jsx";
import './styles.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstComponent></FirstComponent>
    </React.StrictMode>,
)
