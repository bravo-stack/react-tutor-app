import React from 'react'

const Button = ({label, color, setCount, count}) => {

    const updateCount = () => {
        if(label==="increase") {
            setCount(count+1)
        } else if(label==="reduce"&&count <= 0) {
            console.log("can't be lesser than Zero")
        } else if(label === "reduce") {
            setCount(count-1)
        }
    }

  return (
    <div>
        <button className='btn' style={{backgroundColor:color}} onClick={updateCount}>
            {label==="reduce"?"decrease":label==="increase"?"increase":null}
        </button>
    </div>
  )
}

export default Button