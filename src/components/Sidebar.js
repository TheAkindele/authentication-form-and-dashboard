import React, {useState} from 'react'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-box">
                <img src="/icons/prospa-logo-white.svg" alt="logo" id="logo" />
            </div>
            <div className="lines">
                <div className="line" id="first-line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="title-box">
                <p id="topic">
                    Create multiple sub-account
                </p>
                <p id="sub-title">
                    Organise your business finances easily <br/> with multiple accounts. No limits!
                </p>
            </div>
            <div className="image-box">
                <img src="/icons/Group 3.svg" alt="coin-box" id="coin-box" />
            </div>
            <p className="copyright">&copy; 2020 Prospa Inc</p>
        </div>
    )
}

export const AuthSider = () => {
    const [options , setOptions] = useState(true)

    return (
        <div className="sider">
            <div className="step1">
                <img src="/icons/bn.svg" alt="icon" />
                <div className="name-box">
                    <p>Clayvant Inc</p>
                    <p>Manage account</p>
                </div>
                <img src="/icons/down-arrow.svg" alt="icon" id="arrow"
                    onClick={() => setOptions(!options)}
                />
            </div>
            <div className={`step2 `}>
                {options && (
                    <div className="options">
                        <p id="active">Clayvant Inc</p>
                        <p id="second">Business Name 2</p>
                        <p>Business Name 3</p>
                        <p>Add a business</p>
                    </div>
                )}
                <ul className={`menu-list ${options && "down"}`}>
                <li className="list">
                        <img src="/icons/invoice.svg" alt="icon" id="list" />
                        <p>Invoice</p>
                    </li>
                    <li className="list">
                        <img src="/icons/management.svg" alt="icon" id="list" />
                        <p>Management</p>
                    </li>
                    <li className="list">
                        <img src="/icons/management.svg" alt="icon" id="list" />
                        <p>Security</p>
                    </li>
                    <li className="list">
                        <img src="/icons/management.svg" alt="icon" id="list" />
                        <p>Support</p>
                    </li>
                </ul>
                <div className="logo-box">
                    <img src="/icons/prospa-logo-grey.svg" alt="logo" id="logo" />
                </div>
            </div>
        </div>
    )
}


