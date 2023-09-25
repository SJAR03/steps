import React, { useState } from 'react'
import './Steps.css'

const message = [
  'Learn React 👨‍💻',
  'Then practice with proyects 💼',
  'Try to get a job 🤑'
]

const Steps = () => {
  const [step, setStep] = useState(1)

  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious () {
    if (step > 1) setStep(s => s - 1)
  }

  function handleNext () {
    if (step < 3) setStep(s => s + 1)
  }

  function closeOpen () {
    setIsOpen(is => !is)
  }
  return (
    <div>
      <button className='close' onClick={closeOpen}>
        &times;
      </button>
      <h1 className='titulo'>Steps</h1>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className='message'>Step {step}: {message[step - 1]}</p>

          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Steps
