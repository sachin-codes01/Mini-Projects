import React from 'react'
import { useNavigate } from 'react-router-dom'
import './steps.css'

const Step3Confirmation = ({ personData, personAddress }) => {
  const navigate = useNavigate()

  const { firstName, lastName, address, phoneNumber } = personData
  const { street, city, state, zip, country } = personAddress

  return (
    <div className="step-card">
      <h3>Review & Confirm</h3>
      <p>Everything look correct? Submit when ready.</p>

      <div className="review-data">

        <p className="section-label">Person info</p>
        <div className="personal-info">
          <div className="info-box">
            <span className="info-key">FIRST NAME</span>
            <span className="info-val">{firstName}</span>
          </div>
          <div className="info-box">
            <span className="info-key">LAST NAME</span>
            <span className="info-val">{lastName}</span>
          </div>
          <div className="info-box">
            <span className="info-key">EMAIL</span>
            <span className="info-val">{address}</span>
          </div>
          <div className="info-box">
            <span className="info-key">PHONE</span>
            <span className="info-val">{phoneNumber}</span>
          </div>
        </div>

        <p className="section-label">Address</p>
        <div className="info-box info-box--full">
          <span className="info-key">STREET</span>
          <span className="info-val">{street}</span>
        </div>
        <div className="address-info">
          <div className="info-box">
            <span className="info-key">CITY</span>
            <span className="info-val">{city}</span>
          </div>
          <div className="info-box">
            <span className="info-key">STATE</span>
            <span className="info-val">{state}</span>
          </div>
          <div className="info-box">
            <span className="info-key">ZIP</span>
            <span className="info-val">{zip}</span>
          </div>
          <div className="info-box">
            <span className="info-key">COUNTRY</span>
            <span className="info-val">{country}</span>
          </div>
        </div>

      </div>

      <div className="buttons">
        <button onClick={() => navigate('/step2')} type="button" className="back-button">Back</button>
        <button onClick={() => { navigate('/dashboard') }} type="button" className="register-button">Submit Registration</button>
      </div>
    </div>
  )
}

export default Step3Confirmation