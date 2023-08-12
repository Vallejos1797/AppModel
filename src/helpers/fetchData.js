export const fetchData = async (endPoint) => {
    try {
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await reponse.json()
        return {data, isLoading: false}
    } catch (err) {
        console.log('erro')
    }
}
