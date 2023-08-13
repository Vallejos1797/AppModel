import {useState} from "react";
import {useForm} from "../hooks/useForm.js";

export const FormComponent = () => {
    const initialForm ={
        userName: '',
        email: '',
        password: ''
    }
    const {formState, onInput} = useForm(initialForm)
    const {userName, email, password,} = formState
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="name"
                        className="form-control"
                        name="userName"
                        placeholder="Enter User Name"
                        value={userName}
                        onChange={onInput}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={onInput}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           placeholder="password"
                           value={password}
                           onChange={onInput}
                    />

                </div>

                <button type="submit"
                        className="btn btn-primary">Guardar
                </button>
            </form>
        </>
    )

}
