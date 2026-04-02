import React, { useState } from 'react'
import './Login_SignUp.css'
import { useNavigate } from 'react-router-dom'

const Login = ({ users, setLoggedInUser }) => {
    const [input, setInpute] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validate = () => {
        let newError = {}

        if (!input.email) {
            newError.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            newError.email = "Email is invalid"
        }

        if (!input.password) {
            newError.password = "Password is required"
        } else if (input.password.length < 6) {
            newError.password = "Password must be at least 6 characters"
        }

        return newError
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        const matchUser = users.find((user) =>
            user.email === input.email && user.password === input.password
        )

        if (matchUser) {
            setLoggedInUser(matchUser)
            navigate('/home')
            setInpute({ email: '', password: '' })
            setErrors({})
        } else {
            setErrors({ general: "Invalid email or password" })
            return
        }

        console.log(input)
        setInpute({
            email: '',
            password: ''
        })
    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <div className="heading">
                    <h3>Login</h3>
                    {errors.general && <p className="error">{errors.general}</p>}
                </div>

                <label htmlFor="name-email">Email</label>
                <input type="text" className={`input-email ${errors.email ? 'input-error' : ''}`} value={input.email} onChange={(e) => setInpute({ ...input, email: e.target.value })} />
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="name-password">Password</label>
                <input type="text" className={`input-password ${errors.password ? 'input-error' : ''}`} value={input.password} onChange={(e) => setInpute({ ...input, password: e.target.value })} />
                {errors.password && <p className="error">{errors.password}</p>}

                <p className="redirect-text">Don't have an account?{' '}
                    <span onClick={() => navigate('/signup')}>Register</span>
                </p>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
