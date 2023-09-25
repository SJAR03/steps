import React from 'react'
import './Counter.css'

const Counter = () => {
  return (
    <div>
      <h1 className='titulo'>Contador</h1>
      <div className='stepCounter'>
        <div className='counter1'>
          <button>+</button>
          <h4>Step: 5</h4>
          <button>-</button>
        </div>
        <div className='counter2'>
          <button>+</button>
          <h4>Count: 10</h4>
          <button>-</button>
        </div>
        <p>Today is Mon Jun 21 2027</p>
      </div>

    </div>
  )
}

export default Counter
