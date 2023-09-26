import React, { useState } from 'react'

const CounterV2 = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const date = new Date('June 21 2027')
  date.setDate(date.getDate() + count)

  return (
    <div>
      <div>
        <button onClick={() => setStep(s => step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(s => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(c => count - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  )
}

export default CounterV2
