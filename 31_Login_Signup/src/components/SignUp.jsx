import React, { useState } from 'react'
import './Login_SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = ({ registerUser }) => {
    const [input, setInpute] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validate = () => {
        let newError = {}

        if (!input.name.trim()) {
            newError.name = "Name is required"
        }

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

        registerUser({ name: input.name, email: input.email, password: input.password })
        navigate('/')

        console.log(input)
        setInpute({
            name: '',
            email: '',
            password: ''
        })

        setErrors({})
    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <div className="heading">
                    <h3>Register</h3>
                </div>

                <label htmlFor="name-input">Name</label>
                <input type="text" className={`input-name ${errors.name ? 'input-error' : ''}`} value={input.name} onChange={(e) => setInpute({ ...input, name: e.target.value })} />
                {errors.name && <p className="error">{errors.name}</p>}

                <label htmlFor="name-email">Email</label>
                <input type="text" className={`input-email ${errors.email ? 'input-error' : ''}`} value={input.email} onChange={(e) => setInpute({ ...input, email: e.target.value })} />
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="name-password">Password</label>
                <input type="text" className={`input-password ${errors.password ? 'input-error' : ''}`} value={input.password} onChange={(e) => setInpute({ ...input, password: e.target.value })} />
                {errors.password && <p className="error">{errors.password}</p>}


                <p className="redirect-text">Already have an account?{' '}
                    <span onClick={() => navigate('/')}>Login</span>
                </p>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default SignUp
