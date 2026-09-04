import React, { useState } from 'react'

function Social() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <p>count: {count}</p>
      <button className='counter' onClick={ () => setCount(count + 1)}> click me</button>
      
    </div>
  )
}

export default Social
