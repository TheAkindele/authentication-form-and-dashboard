import React from 'react'

export const Input = ({ icon, label}) => {

    return (
        <div className={`text-box ${icon && "with-icon"}`} >
            <div className={`main-input-box ${icon && "iconed"}`}>
            {!icon && <input type="text" name="input" autoComplete="off" required />}
            {icon && <input type="text" name="input" autoComplete="off" defaultValue="+234" />}
            <label htmlFor="input" className="label-cont">
                <span className="label-span">{label}</span>
            </label>
            {icon && (
                <div id="icon-box">
                    <img src="/icons/arrow-down.svg" alt="icon" id="input-icon" />
                </div>
            )}
            </div>
        </div>
    )
}
