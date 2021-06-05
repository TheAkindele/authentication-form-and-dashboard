import React, {useState} from 'react'
import {Input} from "../components/TextInput"


export const SignupForm = ({back}) => {
    return (
        <div className="input-cont">
        <Input label="First Name" />
        <Input label="Last Name" />
        <div id="box">
            <div id="tell">
                <Input label="Country" icon={true} />
            </div>
            <div id="phone">
                <Input label="Mobile Number" />
            </div>
        </div>
        <Input label="Email address" />
        </ div>
    )
}

export const Signup2 = ({nextStep, backStep}) => {
    const [details, setDetails] = useState(false)

    return (
        <form>
            <div className="radio-box" >
                <input type="radio" name="register" value="registered" id="registered" 
                    onClick={() => setDetails(!details)}
                />
                <label for="registered" >
                    <div>
                        <p id="title">I have a registered business / charity with CAC</p>
                        <div className={details ? "show" : "hide"}>
                            <p id="sub" >As a registered business, you'll get</p>
                            <div className="text-box">
                                <img src="/icons/mark.svg" alt="mark" id="mark"/>
                                <p className="sub">Account in your business name</p>
                            </div>
                            <div className="text-box">
                                <img src="/icons/mark.svg" alt="mark" id="mark"/>
                                <p className="sub">Send to and receive transfers from all Nigerian banks</p>
                            </div>
                            <div className="text-box">
                                <img src="/icons/mark.svg" alt="mark" id="mark"/>
                                <p className="sub">Tools for business management</p>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
            <div className="radio-box">
                <input type="radio" name="register" value="unregistered" id="unregistered"
                    onClick={() => setDetails(!details)}
                />
                <label for="unregistered" >
                    <div>
                        <p id="title">My business is not yet registered, I would like to register</p>
                        <div className={details ? "show" : "hide"}>
                            <p id="sub" >Everything you need to start your business</p>
                            <div className="text-box">
                                <img src="/icons/mark.svg" alt="mark" id="mark"/>
                                <p className="sub">Registered business name with CAC</p>
                            </div>
                            <div className="text-box">
                                <img src="/icons/mark.svg" alt="mark" id="mark"/>
                                <p className="sub">Tax identificatio number</p>
                            </div>
                            <div className="text-box">
                                <img src="/icons/mark.svg" alt="mark" id="mark"/>
                                <p className="sub">your account will be automatically opened on completion</p>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
            <div className="radio-box">
                <input type="radio" name="register" value="freelance" id="freelance" />
                <label for="freelance" >
                    <div>
                        <div id="topics">
                            <p id="title">I'm a freelance, I do business in my personal name</p>
                        </div>
                    </div>
                </label>
            </div>
        </form>
    )
}




// export const Signup = () => {
//     const [step, setStep] = useState(0)
//     const nextStep = () => setStep(step + 1)
//     const backStep = () => setStep(step - 1)

//     return (
//         <div className="auth">
            
//             <div className={`top-most ${step !== 1 && "most" }`}>
//                 {step !== 1 && (
//                     <img src="/icons/back-btn.svg" alt="back" id="back-btn"
//                         onClick={() => backStep()}
//                     />
//                 )}
//                 <p id="top">
//                     Already a member? {" "}
//                     <span>Sign In</span>
//                 </p>
//             </div>
//             <div className="main">
//                 {step === 1 && (
//                     <div id="title-box">
//                         <p id="topic">Create your account</p>
//                         <p id="sub-topic">A short description about account types</p>
//                     </div>
//                 )}
//                 {step === 2 && (
//                     <div id="title-box">
//                         <p id="topic">Open a new business account</p>
//                         <p id="sub-topic">A short description comes here</p>
//                     </div>
//                 )}
//                 <form className="form-box">
//                     {step === 0 <Signin />}
//                    {step === 1 && <SignupForm />}
//                    {step === 2 && <Signup2 next={nextStep} back={backStep} />}
//                 </form>
//                 <Button 
//                     text="Next"
//                     onClick={() => nextStep()}
//                 />
//             </div>
//         </div>
//     )
// }
