import { useState } from "react"

const Form = () => {
  



  return (
    <div className="form">
        <form >
        <p>React Form</p>
            <label className="block" htmlFor="">
                <input className="form-control" type="text" placeholder="name" />
            </label>
            <label className="block" htmlFor="">
                <input className="form-control" type="text" placeholder="email" />
            </label>
            <input className="form-btn" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form