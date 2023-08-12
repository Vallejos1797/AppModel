import {useEffect, useState} from "react";
import {fetchData} from "../helpers/fetchData.js";

export const useFetchData = ({endPoint}) => {
    console.log('no llega ', endPoint)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const {data, isLoading} = await fetchData(endPoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        // cuando lo que devuelve es una promesa se puede trabjar con un the para capturar su resultado
        // y no de problemas de asigcronicidad:
        // fetchData(endPoint).then(res => {
        //     setIsLoading(res.isLoading)
        //     setData(res.data)
        // })

        // otra manera que podemos probar es la siguiente añadiendo una función,
        // que si es asincrono proque no puede haber asyncronicidad en  un useEffect pero si fuera de este.
        getData()
    }, [endPoint])

    return {
        data,
        isLoading
    }
}
