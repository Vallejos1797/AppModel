import {useState, useEffect} from "react";
import {useFetchData} from "../hooks/useFetchData.js";

export const UserList = ({endPoint, change}) => {
    console.log('endPonit', endPoint)
    const {data, isLoading} = useFetchData({endPoint: endPoint})

    return (
        <>
            <ul>
                {isLoading ?
                    <p>Cargando...</p>
                           :
                    change ?
                        data.map(user =>
                            <li key={user.id}>
                                Usuario: {user.name} - {user.name}
                            </li>)
                           :
                        data.map(user =>
                            <li key={user.id}>
                                Usuario: {user.name} - {user.body}
                            </li>)}
            </ul>
        </>
    )
}

export default UserList;
