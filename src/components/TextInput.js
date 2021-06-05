import React, {useState} from 'react'

export const Input = ({ icon, label, placeholder, text, className}) => {
    const [clicked, setClicked] = useState(false)
    // const label = "sample label"
    // const icon = true

    return (
        <div className={`text-box ${icon && "with-icon"}`} >
            <div className={`main-input-box ${icon && "iconed"}`}>
            {!icon && <input type="text" name="input" autoComplete="off" required />}
            {icon && <input type="text" name="input" autoComplete="off" value="+234" />}
            <label for="input" className="label-cont">
                <span className="label-span">{label}</span>
            </label>
            {icon && (
                <div id="icon-box">
                    <img src="/icons/arrow-down.svg" alt="icon" id="input-icon" />
                </div>
            )}
            </div>
            {/* {icon && (
                <div id="icon-box">
                    <img src="/icons/arrow-down.svg" alt="icon" id="input-icon" />
                </div>
            )} */}
        </div>
    )
}
