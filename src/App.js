import React, {useState} from "react";
import {RegisterLayout} from "./screens"
import {AuthLayout} from "./screens"

function App() {
  const [step, setStep] = useState(1)
  const nextStep = () => setStep(step + 1)
  // const backStep = () => setStep(step - 1)

  return (
    <div className="app">
      {step === 1 && <RegisterLayout step={step} nextStep={nextStep} />}
      {step === 2 && <AuthLayout />}
    </div>
  )
}

export default App;

