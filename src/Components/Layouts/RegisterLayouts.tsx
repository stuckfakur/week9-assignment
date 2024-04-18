import React, { useState } from 'react'
import FormRegisterStep1 from '../Fragments/FormRegisterStep1'
import FormRegisterStep2 from '../Fragments/FormRegisterStep2'
import FormRegisterStep3 from '../Fragments/FormRegisterStep3'
import TimelineRegister from '../Fragments/TimelineRegister'

interface RegisterLayoutProps {
  onNext?: () => void
  onBack?: () => void
}

const RegisterLayout: React.FC<RegisterLayoutProps> = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleStepChange = () => {
    setCurrentStep(currentStep + 1)
  }
  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <>
      <div className="mb-12 mt-4 px-4">
        <TimelineRegister currentStep={currentStep} />
        <div className="mt-4 rounded-md bg-slate-200 p-4">
          <h1 className="mb-3 border-b-2 pb-2 text-center text-2xl font-bold">Register Step {currentStep}</h1>
          {currentStep === 1 && <FormRegisterStep1 onNext={handleStepChange} />}
          {currentStep === 2 && <FormRegisterStep2 onNext={handleStepChange} onBack={handleBack} />}
          {currentStep === 3 && <FormRegisterStep3 onBack={handleBack} />}
        </div>
      </div>
    </>
  )
}

export default RegisterLayout
