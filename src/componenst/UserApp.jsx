import {useEffect, useState} from "react";
import UserList from "./UserList.jsx";

export const UserApp = () => {

    const [endPoint, setEndPoint] = useState('users')



    const handleFetch = () => {
        setEndPoint('comments')
    }

    return (
        <>
            <h2>Lista de Usuarios:</h2>
            <UserList endPonit={endPoint}>

            </UserList>
            <button onClick={handleFetch}>
                Ver usuarios
            </button>
        </>
    )
}


export default UserApp;
