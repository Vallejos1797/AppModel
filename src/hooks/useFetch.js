import {useEffect, useState} from "react";

export const useFetch = (url) => {

    const [state, setState] = useState(
        {
            data: null,
            isLoading: true,
            errors: null
        }
    )
    const getFetch = async () => {
        try {
            const reponse = await fetch(url)
            const data = await reponse.json()
            setState({
                data,
                isLoading: false,
                errors: null
            })

        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }

    }
    useEffect(() => {
        if (!url) return
        getFetch()
    }, [url])


    return {
        ...state
    }
}
