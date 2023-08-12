import {useState} from "react";

export const AddItem = ({addTask}) => {
    const [inputValue, setInputValue] = useState('')
    const oninputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmitForm = (event) => {

        event.preventDefault()
        console.log('subit form', event)
        console.log('Value ', inputValue)
        addTask(tasks => [...tasks, {name: inputValue, view: true}])

    }
    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputValue}
                onChange={
                    oninputChange
                }
            />
        </form>
    );
}

export default AddItem;

