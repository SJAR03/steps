import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  function stepCounterPlus () {
    setStep(s => s + 1)
  }

  function stepCounterLess () {
    if (step > 1) setStep(s => s - 1)
  }

  function countCounterPlus () {
    setCount(count + step)
    // setDate(new Date(date.getTime() + 86400000))
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + step)
    setDate(newDate)
  }

  function countCounterLess () {
    setCount(count - step)
    // setDate(new Date(date.getTime() - 86400000))
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - step)
    setDate(newDate)
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

        {count === 0
          ? (<p>Today is {date.toDateString()}</p>)
          : count >= 1
            ? (<p>{count} days from today is {date.toDateString()}</p>)
            : (<p>{Math.abs(count)} days ago was {date.toDateString()}</p>)}

      </div>

    </div>
  )
}

export default Counter
