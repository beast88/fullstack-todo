import React, { useState, useEffect } from 'react'

const Signup = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if(password === confirmPassword && password !== ''){
            setDisabled(false)
        }
    }, [password, confirmPassword])

    return (
        <div style={{ height: '300px' }}>
            <h2 className="mb-4 text-primary text-center">signup</h2>
            <div className="mb-4">
                <label className="font-weight-bold" >username</label>
                <input 
                    className="w-100 rounded-sm border border-info p-2" 
                    type="text" 
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="font-weight-bold">password</label>
                <input 
                    className="w-100 rounded-sm border border-info p-2" 
                    type="password" 
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="font-weight-bold">confirm password</label>
                <input 
                    className="w-100 rounded-sm border border-info p-2" 
                    type="password" 
                    placeholder="confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <div className="d-flex justify-content-between align-items-center" >
                <div>
                    <p className="mb-0 font-weight-bolder">Already have an account? <span 
                        className="text-primary cursor"
                        onClick={props.renderLogin}
                    >
                        Login</span></p>
                </div>
                <button disabled={disabled} className={`${disabled ? "bg-secondary" : "bg-primary"} font-weight-bold py-2 px-4 text-white border-0 rounded-sm`}>Create</button>
            </div>
        </div>
    )
}

export default Signup
