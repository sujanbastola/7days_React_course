import React from 'react'
import { useState } from 'react'

const ButtonClick = () => {
  const [count, setCount] = useState<number>(0);
  const [isFavorite, setFavorite] = useState<boolean>(false);


  const setfavorite = () => {
    setFavorite(!isFavorite);
  }
  const addCount = () => {
    setCount(count + 1);
  }
  const subCount = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <div>
      <p>Count :{count}</p>
      <button onClick={addCount}> click me to increase</button>
      <button onClick={subCount}> click me to decrease</button>
      <button onClick={reset}>Reset me </button>

      <h2>{isFavorite? "coupen is enable" :"coupen unavaiable"}</h2>
      <button onClick={setfavorite}> {isFavorite ?"Remove coupen": "show coupen"}</button>
    </div>
  )
}

export default ButtonClick

