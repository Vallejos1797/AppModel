import {useState, useEffect} from "react";

export const UserList = ({endPonit}) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const reponse = await fetch(`https://jsonplaceholder.typicode.com/${endPonit}`)
            const data = await reponse.json()
            setData(data)
            console.log('data', data)
        } catch (err) {
            console.log('erro')
        }
    }


    useEffect(() => {
        fetchData()
    }, [endPonit])

    return (
        <>
            <ul>
                {endPonit === 'users' ?
                    data.map(user =>
                        <li key={user.id}>
                            Usuario: {user.name} - {user.name}
                        </li>) :
                    data.map(user =>
                        <li key={user.id}>
                            Usuario: {user.name} - {user.body}
                        </li>)}
            </ul>
        </>
    )
}

export default UserList;
