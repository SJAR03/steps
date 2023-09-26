import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(1)

  function stepCounterPlus () {
    setStep(step + 1)
  }

  function stepCounterLess () {
    setStep(step - 1)
  }

  function countCounterPlus () {
    setCount(count + step)
  }

  function countCounterLess () {
    setCount(count - step)
  }

  return (
    <div>
      <h1 className='titulo'>Contador</h1>
      <div className='stepCounter'>
        <div className='counter1'>
          <button onClick={stepCounterLess}>-</button>
          <h4>Step: {step}</h4>
          <button onClick={stepCounterPlus}>+</button>
        </div>
        <div className='counter2'>
          <button onClick={countCounterLess}>-</button>
          <h4>Count: {count}</h4>
          <button onClick={countCounterPlus}>+</button>
        </div>
        <p>Today is Mon Jun 21 2027</p>
      </div>

    </div>
  )
}

export default Counter
