import React, { useState } from 'react'
import './steps.css'
import { useNavigate } from 'react-router-dom'

const Step2Address = ({ setPersonAddress, personAddress }) => {
    const navigate = useNavigate()

    const [yourAddress, setYourAddress] = useState({
        street: personAddress.street || '',
        city: personAddress.city || '',
        state: personAddress.state || '',
        zip: personAddress.zip || '',
        country: personAddress.country || '',
    })

    const [errors, setErrors] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setYourAddress({ ...yourAddress, [name]: value })
        if (errors[name]) setErrors({ ...errors, [name]: '' })
    }

    const validate = () => {
        let newErrors = {}
        let isValid = true

        if (!yourAddress.street.trim()) {
            newErrors.street = 'Street address is required'
            isValid = false
        }
        if (!yourAddress.city.trim()) {
            newErrors.city = 'City is required'
            isValid = false
        }
        if (!yourAddress.state.trim()) {
            newErrors.state = 'State is required'
            isValid = false
        }

        const zipRegex = /^[0-9]{6}$/
        if (!yourAddress.zip.trim()) {
            newErrors.zip = 'Zip code is required'
            isValid = false
        } else if (!zipRegex.test(yourAddress.zip)) {
            newErrors.zip = 'Zip code must be 6 digits'
            isValid = false
        }

        if (!yourAddress.country.trim()) {
            newErrors.country = 'Country is required'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return
        setPersonAddress(yourAddress)
        navigate('/step3')
    }

    return (
        <div className="step-card">
            <h3>Your Address</h3>
            <p>Where should we reach you?</p>

            <form onSubmit={handleSubmit}>
                <label>STREET ADDRESS</label>
                <input name='street' type="text" value={yourAddress.street} onChange={handleChange} />
                {errors.street && <span className="error">{errors.street}</span>}

                <div className="grid">
                    <div>
                        <label>CITY</label>
                        <input name='city' type="text" value={yourAddress.city} onChange={handleChange} />
                        {errors.city && <span className="error">{errors.city}</span>}
                    </div>
                    <div>
                        <label>STATE</label>
                        <input name='state' type="text" value={yourAddress.state} onChange={handleChange} />
                        {errors.state && <span className="error">{errors.state}</span>}
                    </div>
                    <div>
                        <label>ZIP CODE</label>
                        <input name='zip' type="text" value={yourAddress.zip} onChange={handleChange} />
                        {errors.zip && <span className="error">{errors.zip}</span>}
                    </div>
                    <div>
                        <label>COUNTRY</label>
                        <input name='country' type="text" value={yourAddress.country} onChange={handleChange} />
                        {errors.country && <span className="error">{errors.country}</span>}
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={() => navigate('/step1')} type='button' className='back-button'>Back</button>
                    <button type='submit'>Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Step2Address