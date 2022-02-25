import PassengerCount from "./PassengerCount"
import Button from "./Button"
import { useState, useEffect } from "react"

const Card = () => {
    const [count, setCount] = useState(0)
    useEffect(() => console.log(`Welcome to my App!!!! 
current passenger ${count}`), [])


  return (
    <div className='card'>
        <p style={{margin: "auto", fontSize: "24px", color: "rgb(1,171,20)" }}>Passenger Counter</p>
        <PassengerCount count={count} />
        <div className="btn-group">
        <Button count={count} label="reduce" color="rgb(171, 1, 20)" setCount={setCount} />
        <Button count={count} label="increase" color="rgb(1,171,20)" setCount={setCount} />
        </div>
    </div>
  )
}

export default Card