import React from "react"
import { useSelector } from "react-redux"

function Number() {
  const num = useSelector((state) => state.number)
  return <div>{num}</div>
}

export default Number
