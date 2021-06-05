import React from 'react'
import {Loader} from "./Loader"


export const Button = ({ text, type, loading, disabled, className, onClick, ...rest }) => {
    return (
        <button 
            type={type}
            className={`button ${disabled ? "disable" : ""} ${loading ? "loading" : ""} ${className}`}
            onClick={onClick}
        >
            {loading ? <Loader/> : text}
        </button>
    )
}
