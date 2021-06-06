import React from 'react'
import {Button} from "../components"
import ApexChart from "../components/Chart"

export const Dashboard = ({smallNav}) => {
    return (
        <div className="dashboard">
            <nav>
                <div className="logo-box">
                    <img src="/icons/prospa-logo-grey.svg" alt="logo" id="logo" />
                </div>
                <div className="menu-box" onClick={() => smallNav()}>
                    <img src="/icons/hamburger.svg" alt="menu" />
                </div>
            </nav>
            <div className="step1">
                <p>Dashboard</p>
                <div className="profile">
                    <img src="/icons/bell.svg" alt="bell" />
                    <img src="/icons/avatar.svg" alt="avatar" id="avatar" />
                </div>
            </div>
            <div className="step2">
                <div className="greeting">
                    <p id="welcome">Welcome back, Kathy</p>
                    <p id="here">Here's what has been happening in the last <span>7 days</span></p>
                </div>
                <Button text="Add a sub accont" className="dash-btn" />
            </div>
            <div className="step3">
                <div className="card-box">
                    <div className="top">
                        <div className="left">
                            <p id="acc">CURRENT ACCOUNT</p>
                            <p id="num">PROVIDUS BANK - 1234567890</p>
                        </div>
                        <img src="/icons/card-purple.svg" alt="card" id="card" />
                    </div>
                    <div className="down">
                        <p id="balance">N7,638,603.<span>45</span></p>
                    </div>
                </div>
                <div className="card-box">
                    <div className="top">
                        <div className="left">
                            <p id="acc">CURRENT ACCOUNT</p>
                            <p id="num">SUB ACCOUNT - 1234567890</p>
                        </div>
                        <img src="/icons/card-green.svg" alt="card" id="card" />
                    </div>
                    <div className="down">
                        <p id="balance">N638,603.<span>45</span></p>
                    </div>
                </div>
            </div>
            <div className="step4">
                <div className="left">
                    <p className="main-title" >June summary</p>
                    <div className="sub-title">
                        <div className="money-box">
                            <p id="money">Money in</p>
                            <p id="figure">N931,190.00</p>
                        </div>
                        <div className="money-box">
                            <p id="money">Money out</p>
                            <p id="figure">N47,480.00</p>
                        </div>
                        <div className="money-box">
                            <p id="money">Difference</p>
                            <p id="figure">N47,480.00</p>
                        </div>
                    </div>
                    <div className="graph-box">
                    <ApexChart />
                    </div>
                </div>
                <div className="right">
                    <p className="main-title" >Cash outflow</p>
                    <div className="summary">
                        <div className="icon-box" id="bank-icon">
                            <img src="/icons/bank.svg" alt="bank" id="img" />
                        </div>
                        <p id="label">Bank Fees</p>
                        <div className="flow-box">
                            <label htmlFor="file">- N250,000</label>
                            <progress id="file" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className="summary">
                        <div id="internet-icon" className="icon-box">
                            <img src="/icons/internet.svg" alt="bank" id="img" />
                        </div>
                        <p id="label">Internet</p>
                        <div className="flow-box">
                            <label htmlFor="file">- N250,000</label> 
                            <progress id="file" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className="summary">
                        <div className="icon-box" id="market-icon">
                            <img src="/icons/marketing.svg" alt="bank" id="img" />
                        </div>
                        <p id="label">Marketing</p>
                        <div className="flow-box">
                            <label htmlFor="file">- N250,000</label> 
                            <progress id="file" value="40" max="100"></progress>
                        </div>
                    </div>
                    <div className="summary">
                        <div className="icon-box" id="transfer-icon">
                            <img src="/icons/transfer.svg" alt="bank" id="img" />
                        </div>
                        <p id="label">Transfer</p>
                        <div className="flow-box">
                            <label htmlFor="file">- N250,000</label> 
                            <progress id="file" value="10" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="step5">
                <div className="card5">
                    <div className="top">
                        <p>Recent transactions</p>
                        <Button text="See all" className="white-btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}
