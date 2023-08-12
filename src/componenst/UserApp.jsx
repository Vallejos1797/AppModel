import {useEffect, useState} from "react";

export const UserApp = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await reponse.json()
            setUsers(data)
            console.log('data', data)
        } catch (err) {
            console.log('erro')
        }
    }
    //
    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    const handleFetch = () => {
        fetchUsers()
    }

    return (
        <>
            <h2>Lista de Usuarios:</h2>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        Usuario: {user.name} - {user.name}
                    </li>)}
            </ul>
            <button onClick={handleFetch}>
                Ver usuarios
            </button>
        </>
    )
}


export default UserApp;
