import React, {useState} from 'react'
import {Input} from "../components/TextInput"
import {Button} from "../components"
import {SignupForm, Signup2} from "./Signup"
import {Login} from "./Login"

export const Auth = () => {
    const [step, setStep] = useState(0)
    const nextStep = () => setStep(step + 1)
    const backStep = () => setStep(step - 1)

    return (
        <div className="auth">
            
            <div className={`top-most ${step === 2 && "most" }`}>
                {step === 2 && (
                    <img src="/icons/back-btn.svg" alt="back" id="back-btn"
                        onClick={() => backStep()}
                    />
                )}
                 {step !== 0 && (<p id="top">
                    Already a member? {" "}
                    <span onClick={() => setStep(0)}>Sign In</span>
                </p>)}
                {step === 0 && (<p id="top">
                    Don't have an account? {" "}
                    <span onClick={() => setStep(1)}>Sign Up</span>
                </p>)}
            </div>
            <div className="main">
                {step === 1 && (
                    <div id="title-box">
                        <p id="topic">Create your account</p>
                        <p id="sub-topic">A short description about account types</p>
                    </div>
                )}
                {step === 2 && (
                    <div id="title-box">
                        <p id="topic">Open a new business account</p>
                        <p id="sub-topic">A short description comes here</p>
                    </div>
                )}
                {step === 0 && (
                    <div id="title-box">
                        <p id="topic">Welcome back to Prospa</p>
                        <p id="sub-topic">An account with powerful, personalised toolsall in one place</p>
                    </div>
                )}
                <form className="form-box">
                    {step === 0 && <Login next={nextStep} />}
                   {step === 1 && <SignupForm back={backStep} />}
                   {step === 2 && <Signup2 next={nextStep} back={backStep} />}
                </form>
                <Button 
                    text="Next"
                    onClick={() => nextStep()}
                />
            </div>
        </div>
    )
}