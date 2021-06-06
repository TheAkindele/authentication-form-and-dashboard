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
    const [details, setDetails] = useState({first: false, second: false})

    return (
        <div className="detail-form">
            <div className={`radio-box ${details.first && "border-red"}`}>
                <input type="radio" name="register" value="registered" id="registered" 
                    onClick={() => setDetails({first: !details.first})}
                />
                <label htmlFor="registered" >
                    <div>
                        <p id="title">I have a registered business / charity with CAC</p>
                        <div className={details.first ? "show" : "hide"}>
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
            <div className={`radio-box ${details.second && "border-red"}`}>
                <input type="radio" name="register" value="unregistered" id="unregistered"
                    onClick={() => setDetails({second: !details.second})}
                />
                <label htmlFor="unregistered" >
                    <div>
                        <p id="title">My business is not yet registered, I would like to register</p>
                        <div className={details.second ? "show" : "hide"}>
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
                <label htmlFor="freelance" >
                    <div>
                        <div id="topics">
                            <p id="title">I'm a freelance, I do business in my personal name</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}


