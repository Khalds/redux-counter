import React from "react"
import { useDispatch } from "react-redux"

function Increment() {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({ type: "increment" })
  }

  const handleDecrement = () => {
    dispatch({ type: "decrement" })
  }
  const handleReset = () => {
    dispatch({ type: "reset" })
  }

  return (
    <div className="buttons">
      <button className="incr" onClick={handleIncrement}>
        Increment
      </button>
      <button className="decr" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="res" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default Increment
