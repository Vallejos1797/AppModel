import {useMemo, useState} from "react";
export const HeavyCalculates = () => {
    const [show, setShow] = useState(true)
    const [listNumbers, setListNumber] = useState([1, 2, 3, 4, 5])
    const getCalculate = (listNumbers) => useMemo(() => {
        return listNumbers.reduce((a, b) => a * b)
    }, [listNumbers])

    const addNumber = (listNumbers) => {
        setListNumber([...listNumbers, listNumbers[listNumbers.length - 1] + 1])
    }
    return (<>
            <h2>Calculos Pesados</h2>
            <p>{getCalculate(listNumbers)}</p>
            <button onClick={() => {
                setShow(!show)
            }}>
                {show ? 'Show' : 'Hide'}
            </button>
            <button onClick={() => {
                addNumber(listNumbers)
            }}>
                Añadir
            </button>
        </>
    )
}
