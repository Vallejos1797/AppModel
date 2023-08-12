import {useEffect, useState} from "react";
import UserList from "./UserList.jsx";

export const UserApp = () => {

    const [endPoint, setEndPoint] = useState('users')
    const [change, setChange] = useState(true)
    const handleFetch = () => {
        setEndPoint(change ? 'comments' : 'users')
        setChange(!change)
    }
    return (
        <>
            <h2>Lista de Usuarios:</h2>
            <UserList endPoint={endPoint} change={change}>
            </UserList>
            <button onClick={handleFetch}>
                Ver usuarios
            </button>
        </>
    )
}


export default UserApp;
