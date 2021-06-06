import React, {useState} from 'react'
import {Button} from "../components"
import {SignupForm, Signup2} from "./Signup"
import {Login} from "./Login"
import {Sidebar} from "../components"

export const RegisterLayout = ({nextStep, step}) => {
    const [subStep, setSubStep] = useState(1)
    const next = () => setSubStep(subStep + 1)
    const prev = () => setSubStep(subStep - 1)
    const changeSub = (e) => setSubStep(e)

    // eslint-disable-next-line no-unused-vars
    const [sider, setSider] = useState(true)

    return (
        <div className="register-layout">
            <div className="register-sider">
                {subStep < 3 && <Sidebar />}
                {subStep === 3 && <Sidebar sider={sider} />}
            </ div>
            <div className="register-content">
                <Register 
                    nextStep={nextStep} subStep={subStep} next={next} 
                    prev={prev} sider={sider} changeSub={changeSub}
                />
            </div>
        </div>
    )
}

export const Register = ({nextStep, subStep, next, prev, sider, changeSub}) => {
    return (
        <div className="auth">
            <nav className={`navbar ${subStep === 3 && "login-nav"}`}>
                <div className="logo-box">
                    <img src="/icons/prospa-logo-white.svg" alt="logo" id="logo" />
                </div>
            </nav>
            <div className={`top-most ${subStep === 2 && "most" }`}>
                {subStep === 2 && (
                    <img src="/icons/back-btn.svg" alt="back" id="back-btn"
                        onClick={() => prev()}
                    />
                )}
                 {subStep !== 3 && (<p id="top">
                    Already a member? {" "}
                    <span 
                        onClick={() => changeSub(3)}
                    >
                        Sign In</span>
                </p>)}
                {subStep === 3 && (<p id="top">
                    Don't have an account? {" "}
                    <span 
                        onClick={() => changeSub(1)}
                    >Sign Up</span>
                </p>)}
            </div>
            <div className="main">
                {subStep === 1 && (
                    <div id="title-box">
                        <p id="topic">Create your account</p>
                        <p id="sub-topic">A short description about account types</p>
                    </div>
                )}
                {subStep === 2 && (
                    <div id="title-box">
                        <p id="topic">Open a new business account</p>
                        <p id="sub-topic">A short description comes here</p>
                    </div>
                )}
                {subStep === 3 && (
                    <div id="title-box">
                        <p id="topic">Welcome back to Prospa</p>
                        <p id="sub-topic">An account with powerful, personalised toolsall in one place</p>
                    </div>
                )}
                <form className="form-box">
                   {subStep === 1 && <SignupForm back={prev} />}
                   {subStep === 2 && <Signup2 next={next} back={prev} />}
                   {subStep === 3 && <Login next={next} />}
                   <Button
                    type="button"
                    text="Next"
                    onClick={() => {
                        subStep < 3 ? next() : nextStep()
                    }}
                    className="register-btn"
                />
                </form>
            </div>
        </div>
    )
}