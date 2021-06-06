import React, {useState} from 'react'
import {Dashboard} from "./Dashboard"
import {AuthSider} from "../components"

export const AuthLayout = () => {
    const [side, setSide] = useState(false)
    const toggleSide = () => setSide(!side)

    return (
        <div className="auth-layout">
            <div className="log-sider">
                <AuthSider smallNav={toggleSide}/>
            </div>
            <div className="log-content">
                <Dashboard smallNav={toggleSide}/>
            </div>
            <div className={`small-menu ${side ? "side-open" : "side-close"}`}>
                <AuthSider smallNav={toggleSide} small={true}/>
            </div>
        </div>
    )
}
