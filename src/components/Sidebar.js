import React, {useState} from 'react'


export const Sidebar = ({sider}) => {

    return (
        <div className={`sidebar ${sider && "login-sider"}`} >
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

export const AuthSider = ({smallNav}) => {
    const [options , setOptions] = useState(false)

    return (
        <div className="auth-sider">
            <div id="menu-box"
                onClick={() => smallNav()}
            >
                <img src="icons/cancelss.svg" alt="hamburger" id="hamburger" />
            </div>
            <div className="step1">
                <img src="/icons/bn.svg" alt="icon" />
                <div className="name-box">
                    <p id="main">Clayvant Inc</p>
                    <p id="sub-main">Manage account</p>
                </div>
                <img src="/icons/down-arrow.svg" alt="icon" id="arrow"
                    onClick={() => setOptions(!options)}
                />
            </div>
            {options && (
                <div className="options">
                    <p className="opt" id="active">Clayvant Inc</p>
                    <p className="opt" id="second">Business Name 2</p>
                    <p  id="third">Business Name 3</p>
                    <p  id="fourth">Add a business</p>
                </div>
             )}
            <div className="step2">
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
                
            </div>
            <div className="logo-box">
                <img src="/icons/prospa-logo-grey.svg" alt="logo" id="logo" />
            </div>
        </div>
    )
}




