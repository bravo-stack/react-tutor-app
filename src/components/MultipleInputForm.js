import { useState } from "react";

const MultipleInputForm = ({setLoginDetails, showModal}) => {
    // FORM STATE
    const [logins, setLogins] = useState({})

    // HANDLE LOGINS CHANGE
    const  handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogins(() => ({...logins, [name]:value}))
    }

    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!logins.username||!logins.email) {
            alert("hey!, you gotta fill it out")
        } else {
            setLoginDetails(logins)
            showModal()
            setLogins({})
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} >
            <p>React Form</p>
                <label className="block" htmlFor="username">
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        className="form-control"
                        placeholder="name"
                        value={logins.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className="block" htmlFor="email">
                    <input 
                        className="form-control" type="email" 
                        name="email" 
                        placeholder="email"
                        id="email"
                        value={logins.email || ""}
                        onChange={handleChange} 
                    />
                </label>
                <input className="form-btn" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default MultipleInputForm