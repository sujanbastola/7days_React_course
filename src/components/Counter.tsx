import React, { useState } from 'react'

const Counter = () => {
  const [count ,setCount] = useState<number>(10);

  return (
    <div>
      <h2> Counter practice</h2>
      <p>count: {count}</p>

      <button onClick={() => setCount (count + 1)}> Add</button>
      <button onClick={() => setCount(count -1)}> MINUS</button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  )
}

export default Counter
