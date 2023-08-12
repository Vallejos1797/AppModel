import '../styles.css';
import {useCounter} from "../hooks/useCounter.js";

export const CountComponent = () => {

    const {
        counter,
        increment,
        decrement,
        reset
    } = useCounter(0)

    return (<>
        <h2>Contador: {counter}</h2>
        <button className="btn btn-primary" onClick={() => increment()}>+1</button>
        <button className="btn btn-secondary mx-3" onClick={() => reset()}>Reiniciar</button>
        <button className="btn btn-danger" onClick={() => decrement(1)}>-1</button>

    </>)
}
