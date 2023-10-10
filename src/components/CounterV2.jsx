import React, { useState } from 'react'
import './CounterV2.css'

const CounterV2 = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const date = new Date('June 21 2027')
  date.setDate(date.getDate() + count)

  function handleReset () {
    setCount(0)
    setStep(1)
  }

  return (
    <div>

      <h1 className='title'>Titulo</h1>
      <div className='counter'>
        <div>

          <input type='range' min='1' max='10' className='range-line' value={step} onChange={e => setStep(Number(e.target.value))} />

          <span>Step: {step}</span>
        </div>
        <div>
          <button onClick={() => setCount(c => count - step)}>-</button>
          <input type='text' value={count} onChange={e => setCount(Number(e.target.value))} />
          <button onClick={() => setCount(c => count + step)}>+</button>
        </div>

        <p>
          <span>{count === 0
            ? 'Today is '
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {(count !== 0 || step !== 1)
          ? (
            <div>
              <button onClick={handleReset}>
                Reset
              </button>
            </div>
            )
          : null}
      </div>
    </div>
  )
}

export default CounterV2
