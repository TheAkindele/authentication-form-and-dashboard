import React from 'react'
import {Input} from "../components/TextInput"

export const Login = ({next}) => {
    return (
        <div className="input-cont">
            <Input label="Email address" />
            <Input label="Password" />
        </ div>
    )
}
