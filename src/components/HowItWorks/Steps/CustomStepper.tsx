import { useEffect, useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'
const CustomStepper = ({ activeIndex = 0 }) => {
  const [activeStep, setActiveStep] = useState(0)

  // useEffect(() => {
  //   setActiveStep(activeIndex)
  // }, [activeIndex])

  return (
    <Stepper
      className="w-[1024px]"
      activeStep={activeIndex}
      connectorStateColors={true}
      connectorStyleConfig={{
        activeColor: '#43b649',
        completedColor: '#43b649',
        size: 3
      }}
      styleConfig={{
        activeBgColor: '#43b649',
        completedBgColor: '#43b649'
      }}
    >
      <Step
        label="Apply"
        onClick={() => {
          setActiveStep(0)
        }}
      />
      <Step
        label="Compare"
        onClick={() => {
          setActiveStep(1)
        }}
      />
      <Step
        label="Get"
        onClick={() => {
          setActiveStep(2)
        }}
      />
    </Stepper>
  )
}

export default CustomStepper
