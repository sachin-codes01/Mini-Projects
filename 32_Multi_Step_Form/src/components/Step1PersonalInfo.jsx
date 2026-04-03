import React, { useState } from 'react'
import './steps.css'
import { useNavigate } from 'react-router-dom'

const Step1PersonalInfo = ({ setPersonData, personData }) => {
    const navigate = useNavigate()

    const [personalInfo, setPersonalInfo] = useState({
        firstName: personData.firstName || '',
        lastName: personData.lastName || '',
        address: personData.address || '',
        phoneNumber: personData.phoneNumber || '',
    })

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setPersonalInfo({ ...personalInfo, [name]: value })
        if (errors[name]) setErrors({ ...errors, [name]: '' })
    }

    const validate = () => {
        let newErrors = {}
        let isValid = true

        if (!personalInfo.firstName.trim()) {
            newErrors.firstName = 'First name is required'
            isValid = false
        }
        if (!personalInfo.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
            isValid = false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!personalInfo.address.trim()) {
            newErrors.address = 'Email is required'
            isValid = false
        } else if (!emailRegex.test(personalInfo.address)) {
            newErrors.address = 'Enter a valid email (example@mail.com)'
            isValid = false
        }

        const phoneRegex = /^[0-9]{10}$/
        if (!personalInfo.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required'
            isValid = false
        } else if (!phoneRegex.test(personalInfo.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return
        setPersonData(personalInfo)
        navigate('/step2')
    }

    return (
        <div className="step-card">
            <h3>Personal Information</h3>
            <p>Tell us a little about yourself.</p>
            <form onSubmit={handleSubmit}>

                <div className="grid">
                    <div>
                        <label>FIRST NAME</label>
                        <input name='firstName' type="text" value={personalInfo.firstName} onChange={handleChange} />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>

                    <div>
                        <label>LAST NAME</label>
                        <input name='lastName' type="text" value={personalInfo.lastName} onChange={handleChange} />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                </div>

                <label>EMAIL ADDRESS</label>
                <input name='address' type="text" value={personalInfo.address} onChange={handleChange} />
                {errors.address && <span className="error">{errors.address}</span>}

                <label>PHONE NUMBER</label>
                <input name='phoneNumber' type="text" value={personalInfo.phoneNumber} onChange={handleChange} />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

                <button type='submit'>Continue</button>
            </form>
        </div>
    )
}

export default Step1PersonalInfo